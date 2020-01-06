import React from 'react';

import Layout from '../components/Layout';
import Gallery from '../components/Gallery';

const img_set = [
  {
    src: require('../assets/images/fulls/01.jpeg'),
    title: 'Ahmed Abdullah',
    desc: 'A Class',
  },
  {
    src: require('../assets/images/fulls/02.jpeg'),
    title: 'Babaita Muhammad',
    desc: 'A Class',
  },
  {
    src: require('../assets/images/fulls/03.jpeg'),
    title: 'Abdul Abimbola ',
    desc: 'A Class',
  },
  {
    src: require('../assets/images/fulls/04.jpeg'),
    title: 'Oladipo Damilola',
    desc: 'A Class',
  },
  {
    src: require('../assets/images/fulls/05.jpeg'),
    title: 'Biola Fatoyinbo',
    desc: '',
  },
  {
    src: require('../assets/images/fulls/06.jpeg'),
    title: 'Shuaib Hamzah',
    desc: 'B Class until JSS3',
  },
  {
    src: require('../assets/images/fulls/07.jpeg'),
    title: 'Awotunde Olanrewaju',
    desc: 'A Class',
  },
  {
    src: require('../assets/images/fulls/08.jpeg'),
    title: 'Olubolaji Damilola',
    desc: 'A Class',
  },
  {
    src: require('../assets/images/fulls/09.jpeg'),
    title: 'Mejedi Tobi',
    desc: 'B Class',
  },
  {
    src: require('../assets/images/fulls/10.jpeg'),
    title: 'Muhammad J Muhammad',
    desc: 'B Class',
  },
  {
    src: require('../assets/images/fulls/11.jpeg'),
    title: 'Mukadas Raji',
    desc: 'A Class',
  },
  {
    src: require('../assets/images/fulls/12.jpeg'),
    title: 'Bakare Ridhwan',
    desc: 'A Class',
  },
  {
    src: require('../assets/images/fulls/13.jpeg'),
    title: 'Dada Sheriff',
    desc: 'A Class',
  },
  {
    src: require('../assets/images/fulls/14.jpeg'),
    title: 'Oyedeji Adeshina Kazeem (AHB)',
    desc: 'B Class',
  },
  {
    src: require('../assets/images/fulls/15.jpeg'),
    title: 'Jolayemi Subomi ',
    desc: 'B Class',
  },
  {
    src: require('../assets/images/fulls/16.jpeg'),
    title: 'Adebayo Theophilus',
    desc: 'C Class',
  },
  {
    src: require('../assets/images/fulls/17.jpeg'),
    title: 'Akande Tomilayo',
    desc: 'C Class',
  },
  {
    src: require('../assets/images/fulls/18.jpeg'),
    title: 'Gbadamosi Tunde',
    desc: 'B Class',
  },
  {
    src: require('../assets/images/fulls/19.jpeg'),
    title: 'Wale Oyedokun',
    desc: 'D Class',
  },
  {
    src: require('../assets/images/fulls/20.jpeg'),
    title: 'Olorunmaiye Adoration',
    desc: 'A Class',
  },
  {
    src: require('../assets/images/fulls/21.jpeg'),
    title: 'Atere Salimat',
    desc: 'C Class',
  },
  {
    src: require('../assets/images/fulls/22.jpeg'),
    title: 'Yusuf Abdulkarim',
    desc: 'A Class',
  },
];
const IndexPage = () => (
  <Layout>
    <Gallery images={img_set} />
  </Layout>
);

export default IndexPage;
