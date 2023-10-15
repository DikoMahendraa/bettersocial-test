export type TypeDummyData = {
  photo_profile: string;
  name: string;
  date: string;
  image: string;
  description: string;
  id: number | string;
  total_upvote: number;
  total_downvote: number;
};

export const DUMMY_DATA: Array<TypeDummyData> = [
  {
    id: 1,
    photo_profile: 'https://picsum.photos/200',
    name: 'Muhammad Gaza',
    date: 'Mar 27, 2023',
    image: 'https://picsum.photos/200',
    total_upvote: 0,
    total_downvote: 0,
    description:
      'Hari ini adalah hari yang luar biasa! Saya pergi berpetualang ke hutan dan menjelajahi alam bebas. Melihat matahari terbenam yang mempesona di tengah pepohonan dan mendengarkan nyanyian burung adalah pengalaman yang menggembirakan. Saya bersyukur bisa menghabiskan waktu di alam dan merasakan kedamaian yang dibawanya.',
  },
  {
    id: 2,
    photo_profile: 'https://picsum.photos/200',
    name: 'Abizar nurul asi',
    image: 'https://picsum.photos/200',
    date: 'Mar 27, 2023',
    total_upvote: 0,
    total_downvote: 0,
    description:
      'Saat ini saya sedang dalam perjalanan panjang yang luar biasa. Kami sedang mengunjungi berbagai kota yang indah dan mendapatkan pengalaman baru setiap harinya. Dari tempat-tempat wisata yang menakjubkan hingga kuliner lokal yang lezat, perjalanan ini benar-benar menginspirasi. Terima kasih kepada semua yang telah berbagi momen luar biasa ini bersama saya.',
  },
  {
    id: 3,
    photo_profile: 'https://picsum.photos/200',
    image: 'https://picsum.photos/200',
    total_upvote: 0,
    total_downvote: 0,
    name: 'Diko Mahendra',
    date: 'Mar 27, 2023',
    description:
      'Musim gugur adalah waktu yang indah. Foliase berwarna-warni menciptakan pemandangan yang menakjubkan di sekitar kami. Saya suka berjalan-jalan di taman dan merasakan kesejukan angin musim gugur. Setelahnya, saya menikmati secangkir teh hangat di depan perapian sambil membaca buku favorit saya. Ah, betapa hebatnya musim ini!',
  },
];
