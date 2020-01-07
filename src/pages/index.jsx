import React from 'react';
import img01 from '../assets/images/fulls/01.jpeg';
import img02 from '../assets/images/fulls/02.jpeg';
import img03 from '../assets/images/fulls/03.jpeg';
import img04 from '../assets/images/fulls/04.jpeg';
import img05 from '../assets/images/fulls/05.jpeg';
import img06 from '../assets/images/fulls/06.jpeg';
import img07 from '../assets/images/fulls/07.jpeg';
import img08 from '../assets/images/fulls/08.jpeg';
import img09 from '../assets/images/fulls/09.jpeg';
import img10 from '../assets/images/fulls/10.jpeg';
import img11 from '../assets/images/fulls/11.jpeg';
import img12 from '../assets/images/fulls/12.jpeg';
import img13 from '../assets/images/fulls/13.jpeg';
import img14 from '../assets/images/fulls/14.jpeg';
import img15 from '../assets/images/fulls/15.jpeg';
import img16 from '../assets/images/fulls/16.jpeg';
import img17 from '../assets/images/fulls/17.jpeg';
import img18 from '../assets/images/fulls/18.jpeg';
import img19 from '../assets/images/fulls/19.jpeg';
import img20 from '../assets/images/fulls/20.jpeg';
import img21 from '../assets/images/fulls/21.jpeg';
import img22 from '../assets/images/fulls/22.jpeg';
// // import img23 from '../assets/images/fulls/23.jpeg';

import Layout from '../components/Layout';
import Gallery from '../components/Gallery';

const imgSet = [
  {
    src: img01,
    title: 'Ahmed Abdullah',
    desc: 'A Class',
  },
  {
    src: img02,
    title: 'Babaita Muhammad',
    desc: 'A Class',
  },
  {
    src: img03,
    title: 'Abdul Abimbola ',
    desc: 'A Class',
  },
  {
    src: img04,
    title: 'Oladipo Damilola',
    desc: 'A Class',
  },
  {
    src: img05,
    title: 'Biola Fatoyinbo',
    desc: '',
  },
  {
    src: img06,
    title: 'Shuaib Hamzah',
    desc: 'B Class until JSS3',
  },
  {
    src: img07,
    title: 'Awotunde Olanrewaju',
    desc: 'A Class',
  },
  {
    src: img08,
    title: 'Olubolaji Damilola',
    desc: 'A Class',
  },
  {
    src: img09,
    title: 'Mejedi Tobi',
    desc: 'B Class',
  },
  {
    src: img10,
    title: 'Muhammad J Muhammad',
    desc: 'B Class',
  },
  {
    src: img11,
    title: 'Mukadas Raji',
    desc: 'A Class',
  },
  {
    src: img12,
    title: 'Bakare Ridhwan',
    desc: 'A Class',
  },
  {
    src: img13,
    title: 'Dada Sheriff',
    desc: 'A Class',
  },
  {
    src: img14,
    title: 'Oyedeji Adeshina Kazeem (AHB)',
    desc: 'B Class',
  },
  {
    src: img15,
    title: 'Jolayemi Subomi ',
    desc: 'B Class',
  },
  {
    src: img16,
    title: 'Adebayo Theophilus',
    desc: 'C Class',
  },
  {
    src: img17,
    title: 'Akande Tomilayo',
    desc: 'C Class',
  },
  {
    src: img18,
    title: 'Gbadamosi Tunde',
    desc: 'B Class',
  },
  {
    src: img19,
    title: 'Wale Oyedokun',
    desc: 'D Class',
  },
  {
    src: img20,
    title: 'Olorunmaiye Adoration',
    desc: 'A Class',
  },
  {
    src: img21,
    title: 'Atere Salimat',
    desc: 'C Class',
  },
  {
    src: img22,
    title: 'Yusuf Abdulkarim',
    desc: 'A Class',
  },
];
const IndexPage = () => (
  <Layout>
    <Gallery images={imgSet} />
  </Layout>
);

export default IndexPage;
