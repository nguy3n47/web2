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

INSERT INTO "public"."Users" ("id", "displayName", "username", "password", "email", "phone", "avatar", "attend", "role", "createdAt", "updatedAt") VALUES
(1, 'Nguyen Dev', '18600187', '$2b$10$EDV54Ae2iDARzqG2Qi8cvud6d83.grBxaJNkNrzOqEY0Hy1re2sXC', 'nguyendev@gmail.com', '0383188752', 'profile.jpg', 't', 'admin', '2021-04-11 08:08:26.356443+07', '2021-04-11 08:08:26.356443+07');
INSERT INTO "public"."Users" ("id", "displayName", "username", "password", "email", "phone", "avatar", "attend", "role", "createdAt", "updatedAt") VALUES
(2, 'Thanh Tung', NULL, '$2b$10$H8Umko03HGnVQYbM6YyrC.mCv5mLXBshvmd1nyBG1HWFQMXmg3oea', 'thanhtung2105@gmail.com', '0942548521', '03ca211037a3eea87570e7c91f70e085', 't', 'user', '2021-04-11 08:09:02.295+07', '2021-04-11 08:09:02.504+07');
INSERT INTO "public"."Users" ("id", "displayName", "username", "password", "email", "phone", "avatar", "attend", "role", "createdAt", "updatedAt") VALUES
(3, 'Duc Huy', NULL, NULL, 'huydzxl@gmail.com', '0965472456', 'profile.jpg', 't', 'user', '2021-04-11 08:09:33.29+07', '2021-04-11 08:09:33.29+07');
INSERT INTO "public"."Users" ("id", "displayName", "username", "password", "email", "phone", "avatar", "attend", "role", "createdAt", "updatedAt") VALUES
(4, 'Nhat Han', NULL, '$2b$10$.RbLffNgJnsfQ23C9EVWV.4NqExdpvhR/66irdKov40TjcdW.6hvi', 'nhathann06@gmail.com', '0941649797', '0033884c62df686fd1fd59389236d789', 't', 'user', '2021-04-11 08:11:08.746+07', '2021-04-11 08:11:08.941+07'),
(5, 'Minh Nghi', NULL, '$2b$10$mf59w20S53sFzlYKr8gSBOSH7VhjxEpA0wsQ41NpBDIRgb83usS.i', 'minhnghivng@gmail.com', '0956479461', '0c28942f692b8f6dce0909c41d889878', 't', 'user', '2021-04-11 08:12:42.149+07', '2021-04-11 08:12:42.341+07'),
(11, 'Mina Young', NULL, '$2b$10$tRIRTNegF0K7BwSLrGOSreNSdLKd55BApNLurrUsgwstO7E5/Jp9G', 'minayoung7@gmail.com', '0924789449', 'c4ff5373dd89fed34f7714cc2fe3d61f', 't', 'user', '2021-04-11 08:23:38.027+07', '2021-04-11 08:23:38.216+07');