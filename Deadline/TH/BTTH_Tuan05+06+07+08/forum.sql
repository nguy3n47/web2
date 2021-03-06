-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Squences
CREATE SEQUENCE IF NOT EXISTS "Conferences_id_seq"

-- Table Definition
CREATE TABLE "public"."Conferences" (
    "id" int4 NOT NULL DEFAULT nextval('"Conferences_id_seq"'::regclass),
    "name" varchar NOT NULL,
    "description" text NOT NULL,
    "fullDescription" text NOT NULL,
    "time" timestamptz NOT NULL,
    "status" bool DEFAULT true,
    "createdAt" timestamptz NOT NULL,
    "updatedAt" timestamptz NOT NULL,
    PRIMARY KEY ("id")
);

-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Squences
CREATE SEQUENCE IF NOT EXISTS "UserConferences_id_seq"

-- Table Definition
CREATE TABLE "public"."UserConferences" (
    "id" int4 NOT NULL DEFAULT nextval('"UserConferences_id_seq"'::regclass),
    "status" bool DEFAULT false,
    "createdAt" timestamptz NOT NULL,
    "updatedAt" timestamptz NOT NULL,
    "UserId" int4,
    "ConferenceId" int4,
    CONSTRAINT "UserConferences_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "public"."Users"("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "UserConferences_ConferenceId_fkey" FOREIGN KEY ("ConferenceId") REFERENCES "public"."Conferences"("id") ON DELETE CASCADE ON UPDATE CASCADE,
    PRIMARY KEY ("id")
);

-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Squences
CREATE SEQUENCE IF NOT EXISTS "Users_id_seq"

-- Table Definition
CREATE TABLE "public"."Users" (
    "id" int4 NOT NULL DEFAULT nextval('"Users_id_seq"'::regclass),
    "displayName" varchar NOT NULL,
    "username" varchar,
    "password" varchar,
    "email" varchar NOT NULL,
    "phone" varchar NOT NULL,
    "avatar" varchar NOT NULL,
    "attend" bool NOT NULL,
    "role" varchar NOT NULL,
    "createdAt" timestamptz NOT NULL,
    "updatedAt" timestamptz NOT NULL,
    PRIMARY KEY ("id")
);

INSERT INTO "public"."Conferences" ("id", "name", "description", "fullDescription", "time", "status", "createdAt", "updatedAt") VALUES
(37, 'H???i th???o Gi??o d???c 2020: T??? ch??? trong gi??o d???c ?????i h???c - T??? ch??nh s??ch ?????n th???c ti???n', 'D??? ki???n ng??y 27/11, ???y ban V??n h??a, Gi??o d???c, Thanh ni??n, Thi???u ni??n v?? Nhi ?????ng c???a Qu???c h???i (U??? ban) ph???i h???p v???i B??? Gi??o d???c v?? ????o t???o c??ng m???t s??? m???t s??? c?? s??? gi??o d???c ?????i h???c t??? ch???c H???i th???o Gi??o d???c 2020 (Vietnam Education Conference - VEC 2020) v???i ch??? ????? ???T??? ch??? ?????i h???c - T??? ch??nh s??ch ?????n th???c ti???n???.', '', '2021-04-22 00:00:00+07', 'f', '2021-04-22 05:09:54.842+07', '2021-04-22 05:10:15.487+07');
INSERT INTO "public"."Conferences" ("id", "name", "description", "fullDescription", "time", "status", "createdAt", "updatedAt") VALUES
(36, 'H???i ngh??? l???n th??? 12, Ban Ch???p h??nh Trung ????ng ?????ng kh??a XII', 'Q??ND - Chi???u 14-5, H???i ngh??? l???n th??? 12, Ban Ch???p h??nh (BCH) Trung ????ng ?????ng kh??a XII h???p phi??n b??? m???c t???i h???i tr?????ng. T???ng B?? th??, Ch??? t???ch n?????c Nguy???n Ph?? Tr???ng ch??? tr?? phi??n h???p v?? c?? b??i ph??t bi???u quan tr???ng b??? m???c h???i ngh??? .', '', '2021-04-22 00:00:00+07', 'f', '2021-04-22 05:09:22.716+07', '2021-04-22 05:09:22.716+07');


INSERT INTO "public"."UserConferences" ("id", "status", "createdAt", "updatedAt", "UserId", "ConferenceId") VALUES
(5, 't', '2021-04-22 05:58:47.213+07', '2021-04-22 05:58:47.213+07', 30, 37);
INSERT INTO "public"."UserConferences" ("id", "status", "createdAt", "updatedAt", "UserId", "ConferenceId") VALUES
(8, 't', '2021-05-01 02:18:30.054+07', '2021-05-01 02:18:30.054+07', 30, 36);


INSERT INTO "public"."Users" ("id", "displayName", "username", "password", "email", "phone", "avatar", "attend", "role", "createdAt", "updatedAt") VALUES
(2, 'Thanh Tung', NULL, '$2b$10$H8Umko03HGnVQYbM6YyrC.mCv5mLXBshvmd1nyBG1HWFQMXmg3oea', 'thanhtung2105@gmail.com', '0942548521', '03ca211037a3eea87570e7c91f70e085', 't', 'user', '2021-04-11 08:09:02.295+07', '2021-04-11 08:09:02.504+07');
INSERT INTO "public"."Users" ("id", "displayName", "username", "password", "email", "phone", "avatar", "attend", "role", "createdAt", "updatedAt") VALUES
(3, 'Duc Huy', NULL, NULL, 'huydzxl@gmail.com', '0965472456', 'profile.jpg', 't', 'user', '2021-04-11 08:09:33.29+07', '2021-04-11 08:09:33.29+07');
INSERT INTO "public"."Users" ("id", "displayName", "username", "password", "email", "phone", "avatar", "attend", "role", "createdAt", "updatedAt") VALUES
(4, 'Nhat Han', NULL, '$2b$10$.RbLffNgJnsfQ23C9EVWV.4NqExdpvhR/66irdKov40TjcdW.6hvi', 'nhathann06@gmail.com', '0941649797', '0033884c62df686fd1fd59389236d789', 't', 'user', '2021-04-11 08:11:08.746+07', '2021-04-11 08:11:08.941+07');
INSERT INTO "public"."Users" ("id", "displayName", "username", "password", "email", "phone", "avatar", "attend", "role", "createdAt", "updatedAt") VALUES
(5, 'Minh Nghi', NULL, '$2b$10$mf59w20S53sFzlYKr8gSBOSH7VhjxEpA0wsQ41NpBDIRgb83usS.i', 'minhnghivng@gmail.com', '0956479461', '0c28942f692b8f6dce0909c41d889878', 't', 'user', '2021-04-11 08:12:42.149+07', '2021-04-11 08:12:42.341+07'),
(11, 'Mina Young', NULL, '$2b$10$tRIRTNegF0K7BwSLrGOSreNSdLKd55BApNLurrUsgwstO7E5/Jp9G', 'minayoung7@gmail.com', '0924789449', 'c4ff5373dd89fed34f7714cc2fe3d61f', 't', 'user', '2021-04-11 08:23:38.027+07', '2021-04-11 08:23:38.216+07'),
(1, 'Nguyen Dev', '18600187', '$2b$10$EDV54Ae2iDARzqG2Qi8cvud6d83.grBxaJNkNrzOqEY0Hy1re2sXC', 'nguyendev@gmail.com', '0383188752', '5e1beae7ebd4802cee376278fa8dc504', 't', 'admin', '2021-04-11 08:08:26.356443+07', '2021-04-11 14:03:07.342+07'),
(30, 'GUBBBBBB', NULL, '$2b$10$pDd1yUlEsVvXtYo8AgL7SeoUOJH1g7qaIjZUc0zBP9E8EPPQNDq1q', 'gubteam@outlook.com', '0383188752', 'f0bae12fe22a26a7ec34bd528c08f81e', 't', 'user', '2021-04-18 03:24:30.621+07', '2021-05-01 02:29:13.807+07');
