import { Test } from "@nestjs/testing";
import { INestApplication, HttpStatus, ExecutionContext } from "@nestjs/common";
import request from "supertest";
import { MorganModule } from "nest-morgan";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { ProductSPUInfoController } from "../productSpuInfo.controller";
import { ProductSPUInfoService } from "../productSpuInfo.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  auditStatus: 42,
  averageCost: 42.42,
  barCode: "exampleBarCode",
  createdAt: new Date(),
  descript: "exampleDescript",
  id: "exampleId",
  price: 42.42,
  productCore: "exampleProductCore",
  productionDate: new Date(),
  productKeywords: "exampleProductKeywords",
  productName: "exampleProductName",
  productSubtitle: "exampleProductSubtitle",
  publishStatus: 42,
  purchasePrice: 42.42,
  shelfLife: 42,
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  auditStatus: 42,
  averageCost: 42.42,
  barCode: "exampleBarCode",
  createdAt: new Date(),
  descript: "exampleDescript",
  id: "exampleId",
  price: 42.42,
  productCore: "exampleProductCore",
  productionDate: new Date(),
  productKeywords: "exampleProductKeywords",
  productName: "exampleProductName",
  productSubtitle: "exampleProductSubtitle",
  publishStatus: 42,
  purchasePrice: 42.42,
  shelfLife: 42,
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    auditStatus: 42,
    averageCost: 42.42,
    barCode: "exampleBarCode",
    createdAt: new Date(),
    descript: "exampleDescript",
    id: "exampleId",
    price: 42.42,
    productCore: "exampleProductCore",
    productionDate: new Date(),
    productKeywords: "exampleProductKeywords",
    productName: "exampleProductName",
    productSubtitle: "exampleProductSubtitle",
    publishStatus: 42,
    purchasePrice: 42.42,
    shelfLife: 42,
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  auditStatus: 42,
  averageCost: 42.42,
  barCode: "exampleBarCode",
  createdAt: new Date(),
  descript: "exampleDescript",
  id: "exampleId",
  price: 42.42,
  productCore: "exampleProductCore",
  productionDate: new Date(),
  productKeywords: "exampleProductKeywords",
  productName: "exampleProductName",
  productSubtitle: "exampleProductSubtitle",
  publishStatus: 42,
  purchasePrice: 42.42,
  shelfLife: 42,
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

describe("ProductSPUInfo", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ProductSPUInfoService,
          useValue: service,
        },
      ],
      controllers: [ProductSPUInfoController],
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

  test("POST /productSpuInfos", async () => {
    await request(app.getHttpServer())
      .post("/productSpuInfos")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        productionDate: CREATE_RESULT.productionDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /productSpuInfos", async () => {
    await request(app.getHttpServer())
      .get("/productSpuInfos")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          productionDate: FIND_MANY_RESULT[0].productionDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /productSpuInfos/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/productSpuInfos"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /productSpuInfos/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/productSpuInfos"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        productionDate: FIND_ONE_RESULT.productionDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
