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
(37, 'Hội thảo Giáo dục 2020: Tự chủ trong giáo dục đại học - Từ chính sách đến thực tiễn', 'Dự kiến ngày 27/11, Ủy ban Văn hóa, Giáo dục, Thanh niên, Thiếu niên và Nhi đồng của Quốc hội (Uỷ ban) phối hợp với Bộ Giáo dục và Đào tạo cùng một số một số cơ sở giáo dục đại học tổ chức Hội thảo Giáo dục 2020 (Vietnam Education Conference - VEC 2020) với chủ đề “Tự chủ đại học - Từ chính sách đến thực tiễn”.', '', '2021-04-22 00:00:00+07', 'f', '2021-04-22 05:09:54.842+07', '2021-04-22 05:10:15.487+07');
INSERT INTO "public"."Conferences" ("id", "name", "description", "fullDescription", "time", "status", "createdAt", "updatedAt") VALUES
(36, 'Hội nghị lần thứ 12, Ban Chấp hành Trung ương Đảng khóa XII', 'QĐND - Chiều 14-5, Hội nghị lần thứ 12, Ban Chấp hành (BCH) Trung ương Đảng khóa XII họp phiên bế mạc tại hội trường. Tổng Bí thư, Chủ tịch nước Nguyễn Phú Trọng chủ trì phiên họp và có bài phát biểu quan trọng bế mạc hội nghị .', '', '2021-04-22 00:00:00+07', 'f', '2021-04-22 05:09:22.716+07', '2021-04-22 05:09:22.716+07');


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
