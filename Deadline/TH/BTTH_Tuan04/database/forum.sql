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
    "ConferenceId" int4
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
    "updatedAt" timestamptz NOT NULL
);

INSERT INTO "public"."Conferences" ("id", "name", "description", "fullDescription", "time", "status", "createdAt", "updatedAt") VALUES
(36, 'Hội nghị lần thứ 12, Ban Chấp hành Trung ương Đảng khóa XII', 'QĐND - Chiều 14-5, Hội nghị lần thứ 12, Ban Chấp hành (BCH) Trung ương Đảng khóa XII họp phiên bế mạc tại hội trường. Tổng Bí thư, Chủ tịch nước Nguyễn Phú Trọng chủ trì phiên họp và có bài phát biểu quan trọng bế mạc hội nghị .', '<div itemprop="articleBody"><p>
	Đồng chí Nguyễn Xuân Phúc, Ủy viên Bộ Chính trị, Thủ tướng Chính phủ thay mặt Bộ Chính trị điều hành chương trình hội nghị.</p>
<table border="0" class="imgEditor" id="3c624f25-5056-459b-96d3-fb4c3e3c0bee">
	<tbody>
		<tr style="text-align:center">
			
		</tr>
		<tr>
			<td>
				<img class="imgtelerik" src="https://file.qdnd.vn/data/images/0/2020/05/14/vuongthuy/14052020vtthuy23.jpg?dpi=150&amp;quality=100&amp;w=575" alt="Hội nghị lần thứ 12, Ban Chấp hành Trung ương Đảng khóa XII thành công tốt đẹp"></td>
		</tr>
		<tr>
			<td style="text-align: center;">
				<em><span style="font-size:12px;"><span style="font-family:arial,helvetica,sans-serif;">Toàn cảnh phiên bế mạc. Ảnh: TTXVN</span></span></em></td>
		</tr>
	</tbody>
</table>
<p>
	Đồng chí Phạm Minh Chính, Ủy viên Bộ Chính trị, Bí thư Trung ương Đảng, Trưởng ban Tổ chức Trung ương đọc Báo cáo của Bộ Chính trị tiếp thu, giải trình ý kiến của Trung ương về tổng kết công tác nhân sự BCH Trung ương khóa XII, phương hướng công tác nhân sự BCH Trung ương khóa XIII và tiêu chuẩn, cơ cấu, số lượng, dự kiến phân bổ đại biểu dự Đại hội đại biểu toàn quốc lần thứ XIII của Đảng.&nbsp;Đồng chí Nguyễn Thị Kim Ngân, Ủy viên Bộ Chính trị, Chủ tịch Quốc hội đọc Báo cáo của Bộ Chính trị tiếp thu, giải trình ý kiến của Trung ương về Đề án phương hướng bầu cử đại biểu Quốc hội khóa XV và đại biểu Hội đồng nhân dân các cấp nhiệm kỳ 2021-2026.</p>
<p>
	BCH Trung ương Đảng đã biểu quyết thông qua Nghị quyết Hội nghị lần thứ 12, BCH Trung ương Đảng khóa XII.</p>
<p>
	Sáng cùng ngày, BCH Trung ương Đảng làm việc tại hội trường, bàn về công tác cán bộ. Đồng chí Tổng Bí thư, Chủ tịch nước Nguyễn Phú Trọng chủ trì, điều hành chương trình hội nghị.</p>
<p>
	BCH Trung ương Đảng đã bầu bổ sung hai đồng chí giữ chức Ủy viên Ủy ban Kiểm tra Trung ương khóa XII, gồm: Đồng chí Nguyễn Văn Hùng, Ủy viên Trung ương Đảng, Bí thư Tỉnh ủy, Chủ tịch Hội đồng nhân dân tỉnh Kon Tum và đồng chí Trần Thị Hiền, Vụ trưởng Vụ Tổng hợp, Cơ quan Ủy ban Kiểm tra Trung ương.</p>
<p>
	BCH Trung ương Đảng đã xem xét, quyết định thi hành kỷ luật đồng chí&nbsp;Đô đốc Nguyễn Văn Hiến, nguyên Ủy viên Trung ương Đảng, nguyên Thứ trưởng Bộ Quốc phòng bằng hình thức khai trừ ra khỏi Đảng.</p>
<p>
	Như vậy, sau 4 ngày làm việc khẩn trương, nghiêm túc, dân chủ và trách nhiệm, Hội nghị lần thứ 12, BCH Trung ương Đảng khóa XII đã bế mạc, hoàn thành toàn bộ nội dung, chương trình đề ra.</p>
<p>
	<strong>NGUYỄN TẤN</strong></p></div>', '2021-04-22 00:00:00+07', 'f', '2021-04-22 05:09:22.716+07', '2021-04-22 05:09:22.716+07');
INSERT INTO "public"."Conferences" ("id", "name", "description", "fullDescription", "time", "status", "createdAt", "updatedAt") VALUES
(37, 'Hội thảo Giáo dục 2020: Tự chủ trong giáo dục đại học - Từ chính sách đến thực tiễn', 'Dự kiến ngày 27/11, Ủy ban Văn hóa, Giáo dục, Thanh niên, Thiếu niên và Nhi đồng của Quốc hội (Uỷ ban) phối hợp với Bộ Giáo dục và Đào tạo cùng một số một số cơ sở giáo dục đại học tổ chức Hội thảo Giáo dục 2020 (Vietnam Education Conference - VEC 2020) với chủ đề “Tự chủ đại học - Từ chính sách đến thực tiễn”.', '<p style="text-align:justify;">Tại đây, ông Phạm Tất Thắng, Phó Chủ nhiệm Ủy ban nhấn mạnh, phát triển nguồn nhân lực có trình độ, chất lượng cao đã được Đảng và Nhà nước xác định là một trong ba đột phá chiến lược quan trọng hàng đầu của đất nước thời kỳ đẩy mạnh công nghiệp hóa, hiện đại hóa và hội nhập quốc tế, đặc biệt là trong bối cảnh nền kinh tế tri thức và chuyển đổi số đang diễn ra mạnh mẽ.</p>

<table align="center" border="0" cellpadding="1" cellspacing="1" style="width:600px;">
	<tbody>
		<tr>
			<td><img alt="" src="https://moet.gov.vn/content/tintuc/PublishingImages/tho_9267.jpg?RenditionID=1" style="width:600px;height:400px;"></td>
		</tr>
	</tbody>
</table>

<p style="text-align:center;"><em>Ông Phạm Tất Thắng, Phó Chủ nhiệm UBVNGDTNTNNĐ của Quốc hội trao đổi tại cuộc gặp mặt báo chí</em></p>

<p style="text-align:justify;">Trước những yêu cầu mới của thời đại, giáo dục đại học (GDĐH) nước ta cần phải có sự chuyển biến mạnh mẽ, đổi mới sáng tạo. Trong đó, tự chủ đại học là điều kiện cần thiết để thực hiện các phương thức quản trị đại học tiên tiến nhằm cải tiến và nâng cao chất lượng đào tạo.</p>

<p style="text-align:justify;">Hệ thống văn bản quy phạm pháp luật về GDĐH đã ngày càng được hoàn thiện, tạo cơ sở pháp lý cho GDĐH phát triển phù hợp với chủ trương, định hướng đổi mới của Đảng và Nhà nước; đặc biệt là việc đẩy mạnh thực hiện tự chủ đối với các cơ sở GDĐH.</p>

<p style="text-align:justify;">Tuy nhiên, từ quy định chính sách đến thực tiễn thi hành còn nhiều rào cản cần phải tháo gỡ, còn khoảng cách cần phải thu hẹp. Vì vậy, chủ đề Hội thảo “Tự chủ đại học – từ chính sách đến thực tiễn” đặc biệt có ý nghĩa và mang tính thời sự.&#160;</p>

<p style="text-align:justify;">Hội thảo sẽ có sự tham gia của 250 đại biểu chính thức, bao gồm đại diện các cơ quan của Quốc hội; các bộ, ngành Trung ương; các đại biểu Quốc hội đang công tác trong lĩnh vực GDĐH; các tổ chức quốc tế; các nhà quản lý cơ sở GDĐH; các chuyên gia, nhà khoa học, ... Dự kiến, lãnh đạo Quốc hội, lãnh đạo Chính phủ sẽ tham dự và phát biểu ý kiến tại hội thảo.</p>

<p style="text-align:justify;">Hội thảo nhằm tạo diễn đàn tập hợp các nhà hoạch định chính sách, nhà quản lý, các chuyên gia, nhà giáo, nhà khoa học trong và ngoài nước để cùng trao đổi, thảo luận về thực trạng triển khai tự chủ trong GDĐH, nhất là từ sau khi Luật sửa đổi, bổ sung một số điều của Luật Giáo dục đại học được ban hành và có hiệu lực thi hành từ tháng 7/2019.</p>

<p style="text-align:justify;">Trên cơ sở đó, đề xuất các ý tưởng, giải pháp giúp cho tự chủ đại học đi vào cuộc sống, thực chất, hiệu quả; tạo điều kiện cho GDĐH phát triển, đáp ứng yêu cầu về nguồn nhân lực có trình độ, chất lượng cao phục vụ cho sự nghiệp đổi mới sáng tạo và hội nhập quốc tế của đất nước.</p>

<p style="text-align:justify;">Hiện nay, hội thảo đã nhận được 105 bài tham luận của đông đảo các chuyên gia, nhà giáo, nhà quản lý, nhà khoa học trong và ngoài nước. Theo Ban tổ chức, nội dung của các bài tham luận bám sát chủ đề trọng tâm của hội nghị với nhiều góc nhìn khác nhau về thể chế, cơ chế thực hiện tự chủ đại học; mối quan hệ giữa trường đại học với cơ quan quản lý có thẩm quyền cũng như giữa các thiết chế quyền lực trong nội bộ nhà trường; trách nhiệm giải trình của cơ sở GDĐH; đặc biệt là về vấn đề tài chính, sở hữu của cơ sở GDĐH công lập trong thực hiện tự chủ.</p>

<p style="text-align:justify;">Với hình thức tổ chức trình bày tham luận có tương tác giữa các diễn giả và đại biểu tham dự, ngoài phiên khai mạc và bế mạc, hội thảo sẽ được chia thành 03 phiên chính, gồm 01 phiên về các vấn đề chung và 02 phiên chuyên đề sâu về: Thể chế tự chủ trong GDĐH và Tự chủ tài chính trong GDĐH.&#160;&#160;</p>

<p style="text-align:justify;">Thông tin chi tiết về Hội thảo Giáo dục 2020 có tại trang web hội thảo: <a href="http://www.hoithaovhgd.vn/"><em>http://www.hoithaovhgd.vn</em></a>.</p>', '2021-04-22 00:00:00+07', 'f', '2021-04-22 05:09:54.842+07', '2021-04-22 05:10:15.487+07');
INSERT INTO "public"."Conferences" ("id", "name", "description", "fullDescription", "time", "status", "createdAt", "updatedAt") VALUES
(40, 'sadasd', 'sd', 'dsadsad', '2021-04-22 00:00:00+07', 'f', '2021-04-22 05:26:08.372+07', '2021-04-22 05:26:08.372+07');

INSERT INTO "public"."UserConferences" ("id", "status", "createdAt", "updatedAt", "UserId", "ConferenceId") VALUES
(4, 't', '2021-04-22 05:26:17.094+07', '2021-04-22 05:26:17.094+07', 38, 40);
INSERT INTO "public"."UserConferences" ("id", "status", "createdAt", "updatedAt", "UserId", "ConferenceId") VALUES
(5, 't', '2021-04-22 05:58:47.213+07', '2021-04-22 05:58:47.213+07', 30, 37);


INSERT INTO "public"."Users" ("id", "displayName", "username", "password", "email", "phone", "avatar", "attend", "role", "createdAt", "updatedAt") VALUES
(2, 'Thanh Tung', NULL, '$2b$10$H8Umko03HGnVQYbM6YyrC.mCv5mLXBshvmd1nyBG1HWFQMXmg3oea', 'thanhtung2105@gmail.com', '0942548521', '03ca211037a3eea87570e7c91f70e085', 't', 'user', '2021-04-11 08:09:02.295+07', '2021-04-11 08:09:02.504+07');
INSERT INTO "public"."Users" ("id", "displayName", "username", "password", "email", "phone", "avatar", "attend", "role", "createdAt", "updatedAt") VALUES
(3, 'Duc Huy', NULL, NULL, 'huydzxl@gmail.com', '0965472456', 'profile.jpg', 't', 'user', '2021-04-11 08:09:33.29+07', '2021-04-11 08:09:33.29+07');
INSERT INTO "public"."Users" ("id", "displayName", "username", "password", "email", "phone", "avatar", "attend", "role", "createdAt", "updatedAt") VALUES
(4, 'Nhat Han', NULL, '$2b$10$.RbLffNgJnsfQ23C9EVWV.4NqExdpvhR/66irdKov40TjcdW.6hvi', 'nhathann06@gmail.com', '0941649797', '0033884c62df686fd1fd59389236d789', 't', 'user', '2021-04-11 08:11:08.746+07', '2021-04-11 08:11:08.941+07');
INSERT INTO "public"."Users" ("id", "displayName", "username", "password", "email", "phone", "avatar", "attend", "role", "createdAt", "updatedAt") VALUES
(30, 'GUB', NULL, '$2b$10$pDd1yUlEsVvXtYo8AgL7SeoUOJH1g7qaIjZUc0zBP9E8EPPQNDq1q', 'gubteam@outlook.com', '0383188752', '54b4f9beecd825b16f4a4e1677636163', 't', 'user', '2021-04-18 03:24:30.621+07', '2021-04-18 03:24:30.842+07'),
(5, 'Minh Nghi', NULL, '$2b$10$mf59w20S53sFzlYKr8gSBOSH7VhjxEpA0wsQ41NpBDIRgb83usS.i', 'minhnghivng@gmail.com', '0956479461', '0c28942f692b8f6dce0909c41d889878', 't', 'user', '2021-04-11 08:12:42.149+07', '2021-04-11 08:12:42.341+07'),
(11, 'Mina Young', NULL, '$2b$10$tRIRTNegF0K7BwSLrGOSreNSdLKd55BApNLurrUsgwstO7E5/Jp9G', 'minayoung7@gmail.com', '0924789449', 'c4ff5373dd89fed34f7714cc2fe3d61f', 't', 'user', '2021-04-11 08:23:38.027+07', '2021-04-11 08:23:38.216+07'),
(1, 'Nguyen Dev', '18600187', '$2b$10$EDV54Ae2iDARzqG2Qi8cvud6d83.grBxaJNkNrzOqEY0Hy1re2sXC', 'nguyendev@gmail.com', '0383188752', '5e1beae7ebd4802cee376278fa8dc504', 't', 'admin', '2021-04-11 08:08:26.356443+07', '2021-04-11 14:03:07.342+07'),
(38, 'T-shirt with Motif', NULL, NULL, 'nguyenvux710@gmail.com', '0383188752', 'profile.jpg', 't', 'user', '2021-04-22 05:26:17.085+07', '2021-04-22 05:26:17.085+07');
