-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Squences
CREATE SEQUENCE IF NOT EXISTS "Books_id_seq"

-- Table Definition
CREATE TABLE "public"."Books" (
    "id" int4 NOT NULL DEFAULT nextval('"Books_id_seq"'::regclass),
    "isbn" varchar,
    "image" varchar,
    "name" varchar,
    "category" varchar,
    "distributor" varchar,
    "createdAt" timestamptz NOT NULL,
    "updatedAt" timestamptz NOT NULL,
    PRIMARY KEY ("id")
);

-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Squences
CREATE SEQUENCE IF NOT EXISTS "Users_id_seq"

-- Table Definition
CREATE TABLE "public"."Users" (
    "id" int4 NOT NULL DEFAULT nextval('"Users_id_seq"'::regclass),
    "fullname" varchar,
    "username" varchar,
    "password" varchar,
    "email" varchar,
    "phone" varchar,
    "avatar" varchar,
    "active" bool,
    "createdAt" timestamptz NOT NULL,
    "updatedAt" timestamptz NOT NULL,
    PRIMARY KEY ("id")
);



INSERT INTO "public"."Users" ("id", "fullname", "username", "password", "email", "phone", "avatar", "active", "createdAt", "updatedAt") VALUES
(2, 'Nguyen', '', '$2b$10$4VSEzC/Ivl7nIoeYkw2m8uNPimLWexILgLnTG4CT9rMrCcF4kAUpS', 'nguyenvux710@gmail.com', '0383188752', 'http://127.0.0.1:5000/images/profile.jpg', 't', '2021-05-27 10:20:50.942+07', '2021-05-27 10:21:40.905+07');

