import { Test } from "@nestjs/testing";
import { INestApplication, HttpStatus, ExecutionContext } from "@nestjs/common";
import request from "supertest";
import { MorganModule } from "nest-morgan";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { SupplierInfoController } from "../supplierInfo.controller";
import { SupplierInfoService } from "../supplierInfo.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  address: "exampleAddress",
  bankAccount: "exampleBankAccount",
  bankName: "exampleBankName",
  createdAt: new Date(),
  id: "exampleId",
  linkMan: "exampleLinkMan",
  phoneNumber: "examplePhoneNumber",
  supplierCode: "exampleSupplierCode",
  supplierName: "exampleSupplierName",
  supplierType: "exampleSupplierType",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  address: "exampleAddress",
  bankAccount: "exampleBankAccount",
  bankName: "exampleBankName",
  createdAt: new Date(),
  id: "exampleId",
  linkMan: "exampleLinkMan",
  phoneNumber: "examplePhoneNumber",
  supplierCode: "exampleSupplierCode",
  supplierName: "exampleSupplierName",
  supplierType: "exampleSupplierType",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    address: "exampleAddress",
    bankAccount: "exampleBankAccount",
    bankName: "exampleBankName",
    createdAt: new Date(),
    id: "exampleId",
    linkMan: "exampleLinkMan",
    phoneNumber: "examplePhoneNumber",
    supplierCode: "exampleSupplierCode",
    supplierName: "exampleSupplierName",
    supplierType: "exampleSupplierType",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  address: "exampleAddress",
  bankAccount: "exampleBankAccount",
  bankName: "exampleBankName",
  createdAt: new Date(),
  id: "exampleId",
  linkMan: "exampleLinkMan",
  phoneNumber: "examplePhoneNumber",
  supplierCode: "exampleSupplierCode",
  supplierName: "exampleSupplierName",
  supplierType: "exampleSupplierType",
  updatedAt: new Date(),
};

const service = {
  create() {
    return CREATE_RESULT;
  },
  findMany: () => FIND_MANY_RESULT,
  findOne: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

describe("SupplierInfo", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: SupplierInfoService,
          useValue: service,
        },
      ],
      controllers: [SupplierInfoController],
      imports: [MorganModule.forRoot(), ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /supplierInfos", async () => {
    await request(app.getHttpServer())
      .post("/supplierInfos")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /supplierInfos", async () => {
    await request(app.getHttpServer())
      .get("/supplierInfos")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /supplierInfos/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/supplierInfos"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /supplierInfos/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/supplierInfos"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
