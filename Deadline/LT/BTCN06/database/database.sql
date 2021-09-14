-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Squences
CREATE SEQUENCE IF NOT EXISTS "Todos_id_seq"

-- Table Definition
CREATE TABLE "public"."Todos" (
    "id" int4 NOT NULL DEFAULT nextval('"Todos_id_seq"'::regclass),
    "userId" int4 NOT NULL,
    "description" text NOT NULL,
    "completed" bool NOT NULL,
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
    "name" varchar NOT NULL,
    "username" varchar,
    "password" varchar NOT NULL,
    "email" varchar NOT NULL,
    "phone" varchar NOT NULL,
    "avatar" varchar NOT NULL,
    "active" bool NOT NULL,
    "createdAt" timestamptz NOT NULL,
    "updatedAt" timestamptz NOT NULL,
    PRIMARY KEY ("id")
);

INSERT INTO "public"."Todos" ("id", "userId", "description", "completed", "createdAt", "updatedAt") VALUES
(4, 1, 'React JS', 'f', '2021-04-11 13:09:01.137+07', '2021-04-11 13:09:01.137+07');
INSERT INTO "public"."Todos" ("id", "userId", "description", "completed", "createdAt", "updatedAt") VALUES
(5, 1, 'React Native', 'f', '2021-04-11 13:09:07.972+07', '2021-04-11 13:09:07.972+07');
INSERT INTO "public"."Todos" ("id", "userId", "description", "completed", "createdAt", "updatedAt") VALUES
(6, 1, 'Node JS', 'f', '2021-04-11 13:09:13.207+07', '2021-04-11 13:09:13.207+07');
INSERT INTO "public"."Todos" ("id", "userId", "description", "completed", "createdAt", "updatedAt") VALUES
(7, 1, 'Golang', 'f', '2021-04-11 13:09:17.078+07', '2021-04-11 13:09:17.078+07'),
(8, 1, 'Sequelize', 'f', '2021-04-11 13:09:31.303+07', '2021-04-11 13:09:31.303+07'),
(9, 1, 'Express', 'f', '2021-04-11 13:09:47.404+07', '2021-04-11 13:09:47.404+07');

INSERT INTO "public"."Users" ("id", "name", "username", "password", "email", "phone", "avatar", "active", "createdAt", "updatedAt") VALUES
(1, 'Nguyen', '18600187', '$2b$10$EDV54Ae2iDARzqG2Qi8cvud6d83.grBxaJNkNrzOqEY0Hy1re2sXC', '18600187@student.hcmus.edu.vn', '0383188752', 'profile.jpg', 't', '2021-04-11 12:53:06.143736+07', '2021-04-11 12:53:06.143736+07');
INSERT INTO "public"."Users" ("id", "name", "username", "password", "email", "phone", "avatar", "active", "createdAt", "updatedAt") VALUES
(2, 'Mina', NULL, '$2b$10$EDV54Ae2iDARzqG2Qi8cvud6d83.grBxaJNkNrzOqEY0Hy1re2sXC', 'minayoug@gmail.com', '039794949', 'profile.jpg', 't', '2021-04-11 12:54:40.767173+07', '2021-04-11 12:54:40.767173+07');
