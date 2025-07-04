const tracks = [
  {
    name: "Hay Là Chúng Ta Cứ Như Vậy Một Vạn Năm",
    artist: "Hoàng Tiêu Vân | Trường Nguyệt Tẫn Minh OST",
    artwork: "https://i.postimg.cc/sfB4vtbq/1.jpg",
    path: "https://github.com/d4m-dev/media/raw/main/cunhuvaymotvannam/2.mp3",
    instrumental: "https://github.com/d4m-dev/media/raw/main/cunhuvaymotvannam/3.mp3",
    lyric: "https://raw.githubusercontent.com/d4m-dev/media/main/cunhuvaymotvannam/1.lrc",
  },
  {
    name: "Em Đồng Ý | I Do",
    artist: "ĐỨC PHÚC x 911 x KHẮC HƯNG  OFFICIAL",
    artwork: "https://i.postimg.cc/TYDMgYZM/1.jpg",
    path: "https://github.com/d4m-dev/media/raw/main/weddingsongs/music_ido.mp3",
    instrumental: "https://github.com/d4m-dev/media/raw/main/weddingsongs/3.mp3",
    lyric: "https://raw.githubusercontent.com/d4m-dev/media/main/weddingsongs/1.lrc",
  },
  {
    name: "Vở Kịch Của Em x Vây Giữ REMIX",
    artist: "Hồ Phong An x HuyN FT",
    artwork: "https://i.postimg.cc/SQCRjdNk/1.jpg",
    path: "https://github.com/d4m-dev/media/raw/main/vokichcuaem/2.mp3",
    instrumental: "https://github.com/d4m-dev/media/raw/main/vokichcuaem/3.mp3",
    lyric: "https://raw.githubusercontent.com/d4m-dev/media/main/vokichcuaem/1.lrc",
  },
  {
    name: "Yêu Em Nhưng Không Với Tới x Vây Giữ REMIX",
    artist: "DC Tâm x SS x AM Remix",
    artwork: "https://i.postimg.cc/8PTpcV0m/1.jpg",
    path: "https://github.com/d4m-dev/media/raw/main/yeuemnhungkhongvoitoi/2.mp3",
    instrumental: "https://github.com/d4m-dev/media/raw/main/yeuemnhungkhongvoitoi/3.mp3",
    lyric: "https://raw.githubusercontent.com/d4m-dev/media/main/yeuemnhungkhongvoitoi/1.lrc",
  },
  {
    name: "Anh Đau Từ Lúc Em Đi",
    artist: "Trần Mạnh Cường",
    artwork: "https://i.postimg.cc/5t3nSLmr/1.jpg",
    path: "https://github.com/d4m-dev/media/raw/main/anhdautulucemdi/2.mp3",
    instrumental: "https://github.com/d4m-dev/media/raw/main/anhdautulucemdi/3.mp3",
    lyric: "https://raw.githubusercontent.com/d4m-dev/media/main/anhdautulucemdi/1.lrc",
  },
  {
    name: "Mạnh Bà lofi",
    artist: "Linh Hương Luz",
    artwork: "https://i.postimg.cc/B62DC0sn/1.jpg",
    path: "https://github.com/d4m-dev/media/raw/main/manhba/2.mp3",
    instrumental: "https://github.com/d4m-dev/media/raw/main/manhba/3.mp3",
    lyric: "https://raw.githubusercontent.com/d4m-dev/media/main/manhba/1.lrc",
  },
  {
    name: "Địa Đàng REMIX",
    artist: "Hoàng Oanh x ACV",
    artwork: "https://i.postimg.cc/GhwgrL9q/1.jpg",
    path: "https://github.com/d4m-dev/media/raw/main/diadang/2.mp3",
    instrumental: "https://github.com/d4m-dev/media/raw/main/diadang/3.mp3",
    lyric: "https://raw.githubusercontent.com/d4m-dev/media/main/diadang/1.lrc",
  },
  {
    name: "Tái Sinh REMIX",
    artist: "Tùng Dương x ACV",
    artwork: "https://i.postimg.cc/mk0vWCJw/1.jpg",
    path: "https://github.com/d4m-dev/media/raw/main/taisinh/2.mp3",
    instrumental: "https://github.com/d4m-dev/media/raw/main/taisinh/3.mp3",
    lyric: "https://raw.githubusercontent.com/d4m-dev/media/main/taisinh/1.lrc",
  },
  {
    name: "Ải Hồng Nhan REMIX",
    artist: "Cần Vinh x Lee Ken",
    artwork: "https://i.postimg.cc/7hLc2m8X/1.jpg",
    path: "https://github.com/d4m-dev/media/raw/main/aihongnhan/2.mp3",
    instrumental: "https://github.com/d4m-dev/media/raw/main/aihongnhan/3.mp3",
    lyric: "https://raw.githubusercontent.com/d4m-dev/media/main/aihongnhan/1.lrc",
  },
  {
    name: "Thương Thì Thôi REMIX",
    artist: "Jank",
    artwork: "https://i.postimg.cc/v8Wk4gJp/1.jpg",
    path: "https://github.com/d4m-dev/media/raw/main/thuongthithoi/2.mp3",
    instrumental: "https://github.com/d4m-dev/media/raw/main/thuongthithoi/3.mp3",
    lyric: "https://raw.githubusercontent.com/d4m-dev/media/main/thuongthithoi/1.lrc",
  },
  {
    name: "Ba Kiếp Tình Một Kiếp Duyên lofi",
    artist: "Lâm Tuấn x MewMew lofi",
    artwork: "https://i.postimg.cc/K85HJ6GQ/1.jpg",
    path: "https://github.com/d4m-dev/media/raw/main/bakieptinhmotkiepduyen/2.mp3",
    instrumental: "https://github.com/d4m-dev/media/raw/main/bakieptinhmotkiepduyen/3.mp3",
    lyric: "https://raw.githubusercontent.com/d4m-dev/media/main/bakieptinhmotkiepduyen/1.lrc",
  },
  {
    name: "Trả Lại Thanh Xuân Cho Em REMIX",
    artist: "Mochiii x Domino Remix",
    artwork: "https://i.postimg.cc/4d3yYRd0/1.jpg",
    path: "https://github.com/d4m-dev/media/raw/main/tralaithanhxuanchoem/2.mp3",
    instrumental: "https://github.com/d4m-dev/media/raw/main/tralaithanhxuanchoem/3.mp3",
    lyric: "https://raw.githubusercontent.com/d4m-dev/media/main/tralaithanhxuanchoem/1.lrc",
  },
  {
    name: "Đào Hoa Nặc",
    artist: "旺仔小乔",
    artwork: "https://i.postimg.cc/htC0JcPF/1.jpg",
    path: "https://github.com/d4m-dev/media/raw/main/daohoanac/2.mp3",
    instrumental: "https://github.com/d4m-dev/media/raw/main/daohoanac/3.mp3",
    lyric: "https://raw.githubusercontent.com/d4m-dev/media/main/daohoanac/1.lrc",
  },
  {
    name: "Vây Giữ",
    artist: "Vương Tĩnh Văn",
    artwork: "https://i.postimg.cc/wx1byWs1/1.jpg",
    path: "https://github.com/d4m-dev/media/raw/main/vaygiu/2.mp3",
    instrumental: "https://github.com/d4m-dev/media/raw/main/vaygiu/3.mp3",
    lyric: "https://raw.githubusercontent.com/d4m-dev/media/main/vaygiu/1.lrc",
  },
  {
    name: "Khóa Ly Biệt Live",
    artist: "Anh Tú",
    artwork: "https://i.postimg.cc/3NMRVV3b/1.jpg",
    path: "https://github.com/d4m-dev/media/raw/main/khoalybiet/2.mp3",
    instrumental: "https://github.com/d4m-dev/media/raw/main/khoalybiet/3.mp3",
    lyric: "https://raw.githubusercontent.com/d4m-dev/media/main/khoalybiet/1.lrc",
  },
  {
    name: "Anh Thôi Nhân Nhượng Cover",
    artist: "Linh Hương Luz",
    artwork: "https://i.postimg.cc/05cDXG3G/1.jpg",
    path: "https://github.com/d4m-dev/media/raw/main/anhthoinhannhuong/2.mp3",
    instrumental: "https://github.com/d4m-dev/media/raw/main/anhthoinhannhuong/3.mp3",
    lyric: "https://raw.githubusercontent.com/d4m-dev/media/main/anhthoinhannhuong/1.lrc",
  },
  {
    name: "Nơi Đâu Tìm Thấy Em lofi",
    artist: "Chu Bin",
    artwork: "https://i.postimg.cc/tJzQQ37W/1.jpg",
    path: "https://github.com/d4m-dev/media/raw/main/noidautimthayem/2.mp3",
    instrumental: "https://github.com/d4m-dev/media/raw/main/noidautimthayem/3.mp3",
    lyric: "https://raw.githubusercontent.com/d4m-dev/media/main/noidautimthayem/1.lrc",
  },
  {
    name: "E Là Không Thể",
    artist: "Anh Quân x Đông Thiên Đức",
    artwork: "https://i.postimg.cc/tJ8PbxfR/1.jpg",
    path: "https://github.com/d4m-dev/media/raw/main/elakhongthe/2.mp3",
    instrumental: "https://github.com/d4m-dev/media/raw/main/elakhongthe/3.mp3",
    lyric: "https://raw.githubusercontent.com/d4m-dev/media/main/elakhongthe/1.lrc",
  },
  {
    name: "Mashup 6 in 1",
    artist: "Mochiii Cover",
    artwork: "https://i.postimg.cc/MZ7GFBLq/1.jpg",
    path: "https://upnhanh.us/files/f8c826d4d62d9e166e12ac4877bafc93/c9097511455de58ce9dba0203ac0f5f5/mashup6in1mochiii.mp3",
    lyric: "https://raw.githubusercontent.com/d4m-dev/media/main/mashup6in1/1.lrc",
  },
  {
    name: "Cạn Tình Như Thế",
    artist: "Dickson x Thành Đạt",
    artwork: "https://i.postimg.cc/MHZ67gf9/1.jpg",
    path: "https://raw.githubusercontent.com/d4m-dev/media/main/cantinhnhuthe/2.mp3",
    instrumental: "https://github.com/d4m-dev/media/raw/main/cantinhnhuthe/3.mp3",
    lyric: "https://raw.githubusercontent.com/d4m-dev/media/main/cantinhnhuthe/1.lrc",
  },
];
