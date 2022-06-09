function loadEvent(){
    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    if (width > 970){
        document.getElementById("event").innerHTML = 
        `<div class="leavel"></div>
        <div class="mid"><img src="img/lhead.png" alt="head"></div>
        <div class="meventr">
            <h1>Gen 1 Recruitment</h1>
            <p>
                <strong>Thời gian:</strong> 22/9/2021- 8/10/2021<br>
                <strong>Thông tin:</strong> tuyển các thành viên cho 2 ban Program và PR. Trong đó tuyển thành viên cho
                ban PR- Content và ban PR- Media.
            </p>
        </div>
        <div class="meventl">
            <h1>Talkshow: Retreat of the tiger</h1>
            <p>
                <strong>Thời gian:</strong> 20h00 - 19/12/2021<br>
                <strong>Hình thức:</strong> Online<br>
                <strong>Diễn giả:</strong> Nguyễn Phúc Huy Bảo<br>
                <strong>Ngôn ngữ:</strong> Tiếng Anh<br>
                <strong>Thông tin:</strong> <i>Lấy bối cảnh vào khoảng thế kỉ 19, khi chủ nghĩa thực dân phát triển và gây
                    ra các hệ quả ảnh hưởng đến nhiều mặt của cuộc sống và con người; khi mà các nền kinh tế phụ thuộc
                    phát triển mạnh, các nền kinh tế bị chuyên môn hóa và thay đổi hoàn toàn nhiều thứ trong xã hội cũ, trong
                    đó có hệ sinh thái. Đồng thời, đây cũng là một trong những lý do chính yếu dẫn đến Chiến tranh Thế giới
                    thứ nhất. Talkshow "Retreat of The tiger" (tạm dịch: sự trở lại của loài hổ) ra đời nhằm giới thiệu mô
                    hình mô phỏng Liên Hợp Quốc đến cho học sinh của trường Phổ Thông Năng Khiếu và học sinh thuộc các trường
                    THPT trong và ngoài thành phố Hồ Chí Minh, đi kèm với đó là tạo cơ hội cho các bạn có sở thích với
                    Mô phỏng Liên Hợp Quốc và các phạm trù liên quan như Lịch Sử, Kinh Tế,… cùng chia sẻ và bàn luận.</i>
            </p>
        </div>
        <div class="mid"><img src="img/lmid.png" alt="mid"></div>
        <div class="leaver"></div>
        <div class="leavel"></div>
        <div class="mid"><img src="img/lmid.png" alt="mid"></div>
        <div class="meventr">
            <h1>Chuyên đề Sử: Vai trò của cá nhân trong Lịch sử</h1>
            <p>
                <strong>Thời gian:</strong> 14h-16h - 21/1/2022<br>
                <strong>Hình thức:</strong> Online<br>
                <strong>Ngôn ngữ:</strong> Tiếng Việt<br>
                <strong>Thông tin:</strong> <i>
                    Nhằm làm rõ vai trò của cá nhân trong lịch sử thông qua những trường hợp
                    cụ thể ở từng giai đoạn — cổ đại, trung đại, cận đại cũng như biết được khi nào cá nhân trở thành vĩ
                    nhân, Câu lạc bộ Mô phỏng Liên Hợp Quốc trường Phổ Thông Năng Khiếu vô cùng vinh dự được đồng hành
                    cùng các thầy cô tổ bộ môn Lịch sử trường Phổ Thông Năng Khiếu tổ chức chuyên đề "VAI TRÒ CỦA CÁ NH
                    ÂN TRONG LỊCH SỬ".<br>
                    Thông qua việc cung cấp kiến thức cơ bản về vai trò của danh nhân trong các giai đoạn của lịch sử
                    đồng thời rèn luyện cho các bạn học sinh có kỹ năng tranh biện khi trao đổi những vấn đề của lịch
                    sử.<br>
                    Chuyên đề hướng đến sự tôn trọng và ý thức giữ gìn những thành tựu mà các danh nhân đã tạo nên đồng
                    thời tôn trọng sự khác biệt của từng cá nhân khác nhau trong cộng đồng xã hội.
                </i>
            </p>
        </div>
        <div class="meventl">
            <h1>Gen ⅕ Recruitment</h1>
            <p>
                <strong>Application Round:</strong> 18/2/2022- 8/3/2022<br>
                <strong>Interview Round:</strong> 15/3/2022- 18/3/2022<br>
                <strong>Announcement:</strong> 21/3/2022
            </p>
        </div>
        <div class="mid"><img src="img/lmid.png" alt="mid"></div>
        <div class="leaver"></div>
        <div class="leavel"></div>
        <div class="mid"><img src="img/lmid.png" alt="mid"></div>
        <div class="meventr">
            <h1>NKO MUN x DMS </h1>
            <p>TBD</p>
        </div>
        <div class="meventl">
            <h1>Mock MUN #1</h1>
            <p>TBD</p>
        </div>
        <div class="mid"><img src="img/llower.png" alt="mid"></div>
        <div class="leaver"></div>`;
    }
    else{
        document.getElementById("event").innerHTML = 
        `<div class="leavel"></div>
        <div class="mid"><img src="img/lhead.png" alt="head"></div>
        <div class="meventr">
            <h1>Gen 1 Recruitment</h1>
            <p>
                <strong>Thời gian:</strong> 22/9/2021- 8/10/2021<br>
                <strong>Thông tin:</strong> tuyển các thành viên cho 2 ban Program và PR. Trong đó tuyển thành viên cho
                ban PR- Content và ban PR- Media.
            </p>
        </div>
        <div class="leavel"></div>
        <div class="mid"><img src="img/lmid.png" alt="mid"></div>
        <div class="meventr">
            <h1>Talkshow: Retreat of the tiger</h1>
            <p>
                <strong>Thời gian:</strong> 20h00 - 19/12/2021<br>
                <strong>Hình thức:</strong> Online<br>
                <strong>Diễn giả:</strong> Nguyễn Phúc Huy Bảo<br>
                <strong>Ngôn ngữ:</strong> Tiếng Anh<br>
                <strong>Thông tin:</strong> <i>Lấy bối cảnh vào khoảng thế kỉ 19, khi chủ nghĩa thực dân phát triển và gây
                    ra các hệ quả ảnh hưởng đến nhiều mặt của cuộc sống và con người; khi mà các nền kinh tế phụ thuộc
                    phát triển mạnh, các nền kinh tế bị chuyên môn hóa và thay đổi hoàn toàn nhiều thứ trong xã hội cũ, trong
                    đó có hệ sinh thái. Đồng thời, đây cũng là một trong những lý do chính yếu dẫn đến Chiến tranh Thế giới
                    thứ nhất. Talkshow "Retreat of The tiger" (tạm dịch: sự trở lại của loài hổ) ra đời nhằm giới thiệu mô
                    hình mô phỏng Liên Hợp Quốc đến cho học sinh của trường Phổ Thông Năng Khiếu và học sinh thuộc các trường
                    THPT trong và ngoài thành phố Hồ Chí Minh, đi kèm với đó là tạo cơ hội cho các bạn có sở thích với
                    Mô phỏng Liên Hợp Quốc và các phạm trù liên quan như Lịch Sử, Kinh Tế,… cùng chia sẻ và bàn luận.</i>
            </p>
        </div>
        <div class="leavel"></div>
        <div class="mid"><img src="img/lmid.png" alt="mid"></div>
        <div class="meventr">
            <h1>Chuyên đề Sử: Vai trò của cá nhân trong Lịch sử</h1>
            <p>
                <strong>Thời gian:</strong> 14h-16h - 21/1/2022<br>
                <strong>Hình thức:</strong> Online<br>
                <strong>Ngôn ngữ:</strong> Tiếng Việt<br>
                <strong>Thông tin:</strong> <i>
                    Nhằm làm rõ vai trò của cá nhân trong lịch sử thông qua những trường hợp
                    cụ thể ở từng giai đoạn — cổ đại, trung đại, cận đại cũng như biết được khi nào cá nhân trở thành vĩ
                    nhân, Câu lạc bộ Mô phỏng Liên Hợp Quốc trường Phổ Thông Năng Khiếu vô cùng vinh dự được đồng hành
                    cùng các thầy cô tổ bộ môn Lịch sử trường Phổ Thông Năng Khiếu tổ chức chuyên đề "VAI TRÒ CỦA CÁ NH
                    ÂN TRONG LỊCH SỬ".<br>
                    Thông qua việc cung cấp kiến thức cơ bản về vai trò của danh nhân trong các giai đoạn của lịch sử
                    đồng thời rèn luyện cho các bạn học sinh có kỹ năng tranh biện khi trao đổi những vấn đề của lịch
                    sử.<br>
                    Chuyên đề hướng đến sự tôn trọng và ý thức giữ gìn những thành tựu mà các danh nhân đã tạo nên đồng
                    thời tôn trọng sự khác biệt của từng cá nhân khác nhau trong cộng đồng xã hội.
                </i>
            </p>
        </div>
        <div class="leavel"></div>
        <div class="mid"><img src="img/lmid.png" alt="mid"></div>
        <div class="meventr">
            <h1>Gen ⅕ Recruitment</h1>
            <p>
                <strong>Application Round:</strong> 18/2/2022- 8/3/2022<br>
                <strong>Interview Round:</strong> 15/3/2022- 18/3/2022<br>
                <strong>Announcement:</strong> 21/3/2022
            </p>
        </div>
        <div class="leavel"></div>
        <div class="mid"><img src="img/lmid.png" alt="mid"></div>
        <div class="meventr">
            <h1>NKO MUN x DMS </h1>
            <p>TBD</p>
        </div>
        <div class="leavel"></div>
        <div class="mid"><img src="img/llower.png" alt="mid"></div>
        <div class="meventr">
            <h1>Mock MUN #1</h1>
            <p>TBD</p>
        </div>`;
        
    }
}
