const fs = require('fs')

const islands: Record<string, any> = {
  bali: {
    id: 'bali',
    label: 'Bali+NT',
    shopPage:
      'eiger-1989-x-taman-nasional/pulau-bali-nusa-tenggara',
    parks: [
      {
        label: 'Bali Barat',
        province: ['Bali'],
        biomes: {
          hutan: 1,
          sabana: 1,
          gunung: 1,
          pantai: 1,
          rawa: 1,
        },
        highlights: [
          'Jalak Bali',
          'Banteng',
          'Rusa',
          'Lutung',
          'Kalong',
        ],
        photos: [
          {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Bali_Barat_mangroves.jpg/1280px-Bali_Barat_mangroves.jpg',
            author: 'Ron',
          },
          {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Jalak_Bali_Taman_Nasional_Bali_Barat.jpg/1367px-Jalak_Bali_Taman_Nasional_Bali_Barat.jpg',
            author: 'Rolandandika',
          },
        ],
        photoUrls: {},
        tShirt: {
          shopPage: 'eiger-bali-barat-national-park-tees',
          imgUrl:
            'https://thumbor.sirclocdn.com/unsafe/640x640/filters:format(webp)/magento.eigeradventure.com/media/catalog/product/cache/cd1064cf96e0921aa13324f8e3f8fe30/9/1/910007985.wht3.jpg',
        },
        // tumbler: {
        //   shopPage: '',
        //   imgUrl: '',
        // },
        website:
          'http://tnbalibarat.blogspot.com/2014/02/taman-nasional-bali-barat.html',
        map: 'West+Bali+National+Park/@-8.1276114,114.4731514,17z/data=!3m1!4b1!4m5!3m4!1s0x2dd143657d50a467:0xc6efbc99a654d0b2!8m2!3d-8.1276114!4d114.4753401',
      },
      {
        label: 'Gunung Rinjani',
        province: ['Nusa Tenggara Barat'],
        biomes: {
          gunung: 1,
          hutan: 1,
          pantai: 1,
        },
        highlights: [
          'Air Terjun Tiu Kelep',
          'Musang Rinjani',
          'Rusa',
          'Lutung budeng',
          'Trenggiling',
          'Burung Cikukua Tanduk',
        ],
        photos: [
          {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Savana_Timur_Gunung_Rinjani.jpg/1280px-Savana_Timur_Gunung_Rinjani.jpg',
            author: 'Suryasriyama',
          },
          {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Senaru_Waterfall_of_Tiu_Kelep.jpg/1280px-Senaru_Waterfall_of_Tiu_Kelep.jpg',
            author: 'Yon illahi',
          },
        ],
        photoUrls: {},
        tShirt: {
          shopPage: 'eiger-rinjani-national-park-tees',
          imgUrl:
            'https://thumbor.sirclocdn.com/unsafe/640x640/filters:format(webp)/magento.eigeradventure.com/media/catalog/product/cache/cd1064cf96e0921aa13324f8e3f8fe30/9/1/910008007.wht3.jpg',
        },
        // tumbler: {
        //   shopPage: '',
        //   imgUrl: '',
        // },
        website: 'http://tngr.dephut.go.id/',
        map: 'Mount+Rinjani+National+Park/@-8.4888428,115.7415918,9z/data=!4m10!1m2!2m1!1staman+nasional+gunung+rinjani!3m6!1s0x2dcdcd3fffffffdd:0xf86f554f959dc261!8m2!3d-8.4254297!4d116.3958027!15sCh10YW1hbiBuYXNpb25hbCBndW51bmcgcmluamFuaVofIh10YW1hbiBuYXNpb25hbCBndW51bmcgcmluamFuaZIBDW5hdGlvbmFsX3BhcmvgAQA!16s%2Fg%2F11gbxb2np2',
      },
      {
        label: 'Kelimutu',
        province: ['Nusa Tenggara Timur'],
        biomes: {
          gunung: 1,
          hutan: 1,
          pantai: 1,
        },
        highlights: ['Danau Tiga Warna'],
        photos: [
          {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Tiwu_Ata_Polo_%28Kelimutu%29.jpg/1280px-Tiwu_Ata_Polo_%28Kelimutu%29.jpg',
            author: 'LukeTriton',
          },
          {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Kelimutu_National_Park.jpg/1024px-Kelimutu_National_Park.jpg',
            author: 'Dedisdoger',
          },
        ],
        photoUrls: {},
        tShirt: {
          shopPage: 'eiger-kelimutu-national-park-tees',
          imgUrl:
            'https://thumbor.sirclocdn.com/unsafe/640x640/filters:format(webp)/magento.eigeradventure.com/media/catalog/product/cache/cd1064cf96e0921aa13324f8e3f8fe30/9/1/910007998.nav3.jpg',
        },
        // tumbler: {
        //   shopPage: '',
        //   imgUrl: '',
        // },
        website: 'https://kelimutu.id/',
        map: 'Kelimutu+National+Park/@-8.7907944,121.6094636,11z/data=!4m10!1m2!2m1!1staman+nasional+kelimutu!3m6!1s0x2dad5d5b7fd93c21:0xb92c1d43de87b7b3!8m2!3d-8.7415482!4d121.7936207!15sChd0YW1hbiBuYXNpb25hbCBrZWxpbXV0dVoZIhd0YW1hbiBuYXNpb25hbCBrZWxpbXV0dZIBDW5hdGlvbmFsX3BhcmvgAQA!16s%2Fm%2F027jbcz',
      },
      {
        label: 'Komodo',
        province: ['Nusa Tenggara Timur'],
        biomes: {
          pantai: 1,
          sabana: 1,
          hutan: 1,
          laut: 1,
        },
        highlights: [
          'Komodo',
          'Pink beach',
          'Rusa Timor',
          'Monyet ekor panjang',
        ],
        photos: [
          {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/When_Sunset_Coming_Home.jpg/1280px-When_Sunset_Coming_Home.jpg',
            author: 'Ruslan Agule',
          },
          {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Komodo_dragon_%28Varanus_komodoensis%29_2.jpg/1280px-Komodo_dragon_%28Varanus_komodoensis%29_2.jpg',
            author: 'Charles James Sharp',
          },
        ],
        photoUrls: {},
        tShirt: {
          shopPage: 'eiger-komodo-nat-park-ss-tees',
          imgUrl:
            'https://thumbor.sirclocdn.com/unsafe/640x640/filters:format(webp)/magento.eigeradventure.com/media/catalog/product/cache/cd1064cf96e0921aa13324f8e3f8fe30/9/1/910008033.oli3.jpg',
        },
        // tumbler: {
        //   shopPage: '',
        //   imgUrl: '',
        // },
        website: 'http://www.komodonationalpark.org/',
        map: 'Komodo+National+Park/@-8.527716,119.4833198,17z/data=!3m1!4b1!4m5!3m4!1s0x2db4f8f329ac91b9:0xb1a1078870e0d162!8m2!3d-8.527716!4d119.4833198',
      },
      {
        label: 'Laiwangi Wanggameti',
        province: ['Nusa Tenggara Timur'],
        biomes: {
          hutan: 1,
        },
        highlights: [
          'Monyet ekor panjang',
          'Babi hutan',
          'Biawak',
          'Kakatua jambul kuning',
        ],
        photos: [
          {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/MuhammadSoleh_BalaiTamanNasionalMatalawa_ElangAlapSapi.jpg/1280px-MuhammadSoleh_BalaiTamanNasionalMatalawa_ElangAlapSapi.jpg',
            author: 'Muhammad Soleh K505',
          },
          {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Pejantan_Julang_Sumba.jpg/1280px-Pejantan_Julang_Sumba.jpg',
            author: 'Muhammad Soleh K505',
          },
        ],
        photoUrls: {},
        tShirt: {
          shopPage: 'eiger-laiwangi-wanggameti-tees',
          imgUrl:
            'https://thumbor.sirclocdn.com/unsafe/640x640/filters:format(webp)/magento.eigeradventure.com/media/catalog/product/cache/cd1064cf96e0921aa13324f8e3f8fe30/9/1/910008027.wht3.jpg',
        },
        // tumbler: {
        //   shopPage: '',
        //   imgUrl: '',
        // },
        map: 'Laiwangi+Wanggameti+National+Park,+Pulau+Sumba,+Pindu+Hurani,+Kec.+Tabundung,+Kabupaten+Sumba+Timur,+Nusa+Tenggara+Tim./@-9.9887751,119.9456944,12z/data=!3m1!4b1!4m5!3m4!1s0x2c4b84e4c97f3533:0x6113bc2245ce9e9a!8m2!3d-10.0035511!4d120.0087372',
      },
      {
        label: 'Manupeu Tanah Daru',
        province: ['Nusa Tenggara Timur'],
        biomes: {
          hutan: 1,
        },
        highlights: [
          'Berbagai Pantai,',
          'Air Terjun,',
          'dan Gua',
          'Kakatua cempaka',
        ],
        photos: [
          {
            url: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Keindahan-air-terjun-Lapopu-krd-TN-Manupeu-Tanah-Daru.jpg',
            author:
              'Kementerian Lingkungan Hidup dan Kehutanan Republik Indonesia',
          },
          {
            url: 'https://upload.wikimedia.org/wikipedia/commons/9/9c/Gua-di-kawasan-TN-Manupeu-Tanah-Daru-krd-TN-Manupeu-Tanah-Daru.jpg',
            author:
              'Kementerian Lingkungan Hidup dan Kehutanan Republik Indonesia',
          },
        ],
        photoUrls: {},
        tShirt: {
          shopPage:
            'eiger-manupeu-tanah-daru-national-park-tees',
          imgUrl:
            'https://thumbor.sirclocdn.com/unsafe/640x640/filters:format(webp)/magento.eigeradventure.com/media/catalog/product/cache/cd1064cf96e0921aa13324f8e3f8fe30/9/1/910008003.blk2.jpg',
        },
        // tumbler: {
        //   shopPage: '',
        //   imgUrl: '',
        // },
        map: 'Manupeu+Tanah+Daru+National+Park/@-9.5777935,119.4933365,15z/data=!3m1!4b1!4m5!3m4!1s0x2c4b21fa55555555:0x8029da5eb0573005!8m2!3d-9.5777936!4d119.5020698',
      },
      {
        label: 'Tambora',
        province: ['Nusa Tenggara Barat'],
        biomes: {
          gunung: 1,
          hutan: 1,
          sabana: 1,
        },
        highlights: [
          'Kakatua kecil jambul kuning',
          'Nuri kepala merah',
          'Kirik-kirik australia',
          'Ayam hutan hijau',
          'Rusa timor',
          'Kera abu-abu',
        ],
        photos: [
          {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Landscape_of_Tambora.jpg/1280px-Landscape_of_Tambora.jpg',
            author: 'Iqbal Ishlahiddin',
          },
          {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Savana_at_the_foot_of_Mount_Tambora.jpg/1280px-Savana_at_the_foot_of_Mount_Tambora.jpg',
            author: 'Budi Wasisto',
          },
        ],
        photoUrls: {},
        tShirt: {
          shopPage: 'eiger-tambora-national-park-tees',
          imgUrl:
            'https://thumbor.sirclocdn.com/unsafe/640x640/filters:format(webp)/magento.eigeradventure.com/media/catalog/product/cache/cd1064cf96e0921aa13324f8e3f8fe30/9/1/910008010.nav3.jpg',
        },
        // tumbler: {
        //   shopPage: '',
        //   imgUrl: '',
        // },
        website: 'http://tntambora.org/',
        map: 'Mount+Tambora+National+Park/@-8.9153853,116.4244083,7z/data=!4m10!1m2!2m1!1sTaman+Nasional+tambora!3m6!1s0x2dca35147077bb29:0x7734f3d2f525ec62!8m2!3d-8.2726611!4d117.9819518!15sChZUYW1hbiBOYXNpb25hbCB0YW1ib3JhWhgiFnRhbWFuIG5hc2lvbmFsIHRhbWJvcmGSAQ1uYXRpb25hbF9wYXJrmgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVVJ6Y1dKTUxYaDNSUkFC4AEA!16s%2Fg%2F11bwctrljj',
      },
    ],
  },
  jawa: {
    id: 'jawa',
    label: 'Jawa',
    shopPage: 'eiger-1989-x-taman-nasional/pulau-jawa',
    parks: [
      {
        label: 'Alas Purwo',
        province: ['Jawa Timur'],
        biomes: {
          pantai: 1,
          hutan: 1,
          sabana: 1,
        },
        highlights: [
          'Lutung',
          'Kancil',
          'Macan tutul',
          'Rangkong badak',
          'Merak',
          'Penyu belimbing',
          'Penyu hijau',
          'Penyu sisik',
        ],
        photos: [
          {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Banteng_Alas_Purwo.jpg/1280px-Banteng_Alas_Purwo.jpg',
            author: '	Buyung Sukananda',
          },
          {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Elang_Ular_Bido_Alas_Purwo.jpg/1280px-Elang_Ular_Bido_Alas_Purwo.jpg',
            author: 'Win.ther story or Arif Rudiyanto',
          },
        ],
        photoUrls: {},
        tShirt: {
          shopPage: 'eiger-alas-purwo-national-park-tees',
          imgUrl:
            'https://thumbor.sirclocdn.com/unsafe/640x640/filters:format(webp)/magento.eigeradventure.com/media/catalog/product/cache/cd1064cf96e0921aa13324f8e3f8fe30/9/1/910008031.blk2.jpg',
        },
        // tumbler: {
        //   shopPage: '',
        //   imgUrl: '',
        // },
        website: 'http://tnalaspurwo.org/',
        map: 'Alas+Purwo+National+Park/@-8.4580983,114.2625984,11z/data=!4m10!1m2!2m1!1sTaman+Nasional+Alas+Purwo!3m6!1s0x2dd3eb155555554d:0xcf9a66e24c7e8c23!8m2!3d-8.6823059!4d114.4529792!15sChlUYW1hbiBOYXNpb25hbCBBbGFzIFB1cndvWhsiGXRhbWFuIG5hc2lvbmFsIGFsYXMgcHVyd2-SAQ1uYXRpb25hbF9wYXJr4AEA!16s%2Fg%2F11c2pr8l9l,',
      },
      {
        label: 'Baluran',
        province: ['Jawa Timur'],
        biomes: {
          pantai: 1,
          hutan: 1,
          gunung: 1,
          sabana: 1,
        },
        highlights: [
          'Ayam hutan',
          'Merak',
          'Rusa',
          'Kijang',
          'Banteng',
          'Kerbau liar',
          'Macan tutul Jawa',
        ],
        photos: [
          {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Savana_Bekol_Taman_Nasional_Baluran.jpg/1280px-Savana_Bekol_Taman_Nasional_Baluran.jpg',
            author: 'Muhammad Farhan Atmawinanda',
          },
          {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Javan_Green_Peafowl_in_Baluran_National_Park.jpg/1280px-Javan_Green_Peafowl_in_Baluran_National_Park.jpg',
            author: '	Panji Gusti Akbar',
          },
        ],
        photoUrls: {},
        tShirt: {
          shopPage: 'eiger-baluran-national-park-tees',
          imgUrl:
            'https://thumbor.sirclocdn.com/unsafe/640x640/filters:format(webp)/magento.eigeradventure.com/media/catalog/product/cache/cd1064cf96e0921aa13324f8e3f8fe30/9/1/910008030.nav3.jpg',
        },
        // tumbler: {
        //   shopPage: '',
        //   imgUrl: '',
        // },
        website:
          'https://pariwisata.situbondokab.go.id/wisata/taman-nasional-baluran/',
        map: 'Baluran+National+Park/@-8.4576766,113.8432227,9z/data=!4m10!1m2!2m1!1sTaman+Nasional+Baluran!3m6!1s0x2dd1249454d7c085:0x67067c7ed3eced4b!8m2!3d-7.8311884!4d114.3875505!15sChZUYW1hbiBOYXNpb25hbCBCYWx1cmFuWhgiFnRhbWFuIG5hc2lvbmFsIGJhbHVyYW6SAQ1uYXRpb25hbF9wYXJrmgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVU52YWkxeVEwMUJFQUXgAQA!16s%2Fm%2F025tbhm',
      },
      {
        label: 'Bromo Tengger Semeru',
        province: ['Jawa Timur'],
        biomes: {
          pantai: 1,
          hutan: 1,
          gunung: 1,
        },
        highlights: [
          'Surili',
          'Elang jawa',
          'Kijang',
          'Lutung',
          'Pelanduk',
          'Macan tutul Jawa',
        ],
        photos: [
          {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/The_Beauty_of_Bromo_Mountains.jpg/1280px-The_Beauty_of_Bromo_Mountains.jpg',
            author: '	Aprisonsan',
          },
          {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Danau_Ranu_Kumbolo%2C_TN_Bromo-Tengger-Semeru.jpg/1280px-Danau_Ranu_Kumbolo%2C_TN_Bromo-Tengger-Semeru.jpg',
            author: 'Chafidwahyu',
          },
        ],
        photoUrls: {},
        tShirt: {
          shopPage:
            'eiger-bromo-tengger-semeru-national-tees',
          imgUrl:
            'https://thumbor.sirclocdn.com/unsafe/640x640/filters:format(webp)/magento.eigeradventure.com/media/catalog/product/cache/cd1064cf96e0921aa13324f8e3f8fe30/9/1/910007989.oli2.jpg',
        },
        // tumbler: {
        //   shopPage: '',
        //   imgUrl: '',
        // },
        website: 'https://bromotenggersemeru.org/',
        map: 'Bromo+Tengger+Semeru+National+Park/@-7.9586177,112.8693529,12z/data=!4m10!1m2!2m1!1sTaman+Nasional+Bromo+Tengger+Semeru!3m6!1s0x2dd63f365f69c945:0x36aec022815992c9!8m2!3d-8.0218747!4d112.9524384!15sCiNUYW1hbiBOYXNpb25hbCBCcm9tbyBUZW5nZ2VyIFNlbWVydVolIiN0YW1hbiBuYXNpb25hbCBicm9tbyB0ZW5nZ2VyIHNlbWVydZIBDW5hdGlvbmFsX3BhcmvgAQA!16s%2Fm%2F027jvy8',
      },
      {
        label: 'Gunung Ciremai',
        province: ['Jawa Barat'],
        biomes: {
          hutan: 1,
          gunung: 1,
        },
        highlights: [
          'Curug Puteri',
          'Situ Sangiang',
          'Macan tutul',
          'Surili',
          'Lutung budeng',
          'Kukang jawa',
          'Celepuk jawa',
          'Walik kepala-ungu',
        ],
        photos: [
          {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/The_Undine.jpg/1726px-The_Undine.jpg',
            author: 'Affroni',
          },
          {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Sejoli.jpg/1280px-Sejoli.jpg',
            author: 'YoegaD',
          },
        ],
        photoUrls: {},
        tShirt: {
          shopPage:
            'eiger-mount-ciremai-national-park-tees',
          imgUrl:
            'https://thumbor.sirclocdn.com/unsafe/640x640/filters:format(webp)/magento.eigeradventure.com/media/catalog/product/cache/cd1064cf96e0921aa13324f8e3f8fe30/9/1/910008029.nav2.jpg',
        },
        tumbler: {
          shopPage: 'eiger-tn-gn-ciremai-water-bottle',
          imgUrl:
            'https://thumbor.sirclocdn.com/unsafe/640x640/filters:format(webp)/magento.eigeradventure.com/media/catalog/product/cache/cd1064cf96e0921aa13324f8e3f8fe30/b/o/botol-minum-tumblr-taman-nasional-gunung-ciremai.jpg',
        },
        map: 'Mount+Ciremai+National+Park/@-6.9200937,108.2765736,11z/data=!4m10!1m2!2m1!1sTaman+Nasional+Gunung+Ciremai!3m6!1s0x2e6f3d455552df21:0xb2853e1d35351916!8m2!3d-6.9071582!4d108.4157357!15sCh1UYW1hbiBOYXNpb25hbCBHdW51bmcgQ2lyZW1haVofIh10YW1hbiBuYXNpb25hbCBndW51bmcgY2lyZW1haZIBDW5hdGlvbmFsX3BhcmvgAQA!16s%2Fm%2F03cdv2h',
      },
      {
        label: 'Gunung Gede Pangrango',
        province: ['Jawa Barat'],
        biomes: {
          hutan: 1,
          gunung: 1,
        },
        highlights: [
          '200 spesies anggrek',
          'Lutung surili',
          'Owa jawa',
          'Macan tutul',
          'Elang jawa',
        ],
        photos: [
          {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Gunung_Gede_in_The_Clouds.jpg/1280px-Gunung_Gede_in_The_Clouds.jpg',
            author: 'Tanti Ruwani',
          },
          {
            url: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Indigo_Flycatcher_%28Eumyias_indigo%29_-_Flickr_-_Lip_Kee_%281%29.jpg',
            author: 'Lip Kee',
          },
        ],
        photoUrls: {},
        tShirt: {
          shopPage:
            'eiger-gunung-gede-pangrango-national-park-tees',
          imgUrl:
            'https://thumbor.sirclocdn.com/unsafe/640x640/filters:format(webp)/magento.eigeradventure.com/media/catalog/product/cache/cd1064cf96e0921aa13324f8e3f8fe30/9/1/910007995.nav3.jpg',
        },
        tumbler: {
          shopPage:
            'eiger-tn-gn-gede-pangrango-water-bottle',
          imgUrl:
            'https://thumbor.sirclocdn.com/unsafe/640x640/filters:format(webp)/magento.eigeradventure.com/media/catalog/product/cache/cd1064cf96e0921aa13324f8e3f8fe30/b/o/botol-minum-tumblr-taman-nasional-gunung-gede-pangrango.jpg',
        },
        website: 'http://www.gedepangrango.org/',
        map: 'Taman+Nasional+Gunung+Gede+Pangrango/@-6.7373223,106.9962568,15z/data=!4m10!1m2!2m1!1sTaman+Nasional+Gunung+Gede+Pangrango!3m6!1s0x2e69b3c067e3b2cb:0x5c35f2d5fc94ed51!8m2!3d-6.737286!4d107.0053077!15sCiRUYW1hbiBOYXNpb25hbCBHdW51bmcgR2VkZSBQYW5ncmFuZ29aJiIkdGFtYW4gbmFzaW9uYWwgZ3VudW5nIGdlZGUgcGFuZ3JhbmdvkgENbmF0aW9uYWxfcGFya-ABAA!16s%2Fm%2F027nx4p',
      },
      {
        label: 'Gunung Halimun-Salak',
        province: ['Jawa Barat'],
        biomes: {
          hutan: 1,
          gunung: 1,
        },
        highlights: [],
        photos: [
          {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Malasari_kabut.jpg/1280px-Malasari_kabut.jpg',
            author: 'Ade javanese',
          },
          {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Volcanic_activity_of_Kawah_Ratu_Gunung_Salak%2C_Halimun_Salak_National_Park.jpg/1280px-Volcanic_activity_of_Kawah_Ratu_Gunung_Salak%2C_Halimun_Salak_National_Park.jpg',
            author: 'Toni Wöhrl',
          },
        ],
        photoUrls: {},
        tShirt: {
          shopPage:
            'eiger-halimun-salak-national-park-tees',
          imgUrl:
            'https://thumbor.sirclocdn.com/unsafe/640x640/filters:format(webp)/magento.eigeradventure.com/media/catalog/product/cache/cd1064cf96e0921aa13324f8e3f8fe30/9/1/910007996.wht3.jpg',
        },
        tumbler: {
          shopPage:
            'eiger-tn-gn-halimun-salak-water-bottle',
          imgUrl:
            'https://thumbor.sirclocdn.com/unsafe/640x640/filters:format(webp)/magento.eigeradventure.com/media/catalog/product/cache/cd1064cf96e0921aa13324f8e3f8fe30/b/o/botol-minum-tumblr-taman-nasional-halimun-salak.jpg',
        },
        website: 'http://halimunsalak.org/',
        map: 'Mount+Halimun+Salak+National+Park/@-6.701589,106.4554126,15z/data=!3m1!4b1!4m5!3m4!1s0x2e4278de3174df9b:0x5d3795f6f58e6bda!8m2!3d-6.7015891!4d106.4641459',
      },
      {
        label: 'Gunung Merapi',
        province: ['Jawa Tengah'],
        biomes: {
          hutan: 1,
          gunung: 1,
        },
        highlights: [],
        photos: [
          {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Merapi_Volcano.jpg/1280px-Merapi_Volcano.jpg',
            author: 'Win.ther story or Arif Rudiyanto',
          },
          {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Walik_Kepala_Ungu_di_Taman_Nasional_Merapi.jpg/1280px-Walik_Kepala_Ungu_di_Taman_Nasional_Merapi.jpg',
            author: 'Win.ther story or Arif Rudiyanto',
          },
        ],
        photoUrls: {},
        tShirt: {
          shopPage:
            'eiger-gunung-merapi-national-park-tees',
          imgUrl:
            'https://thumbor.sirclocdn.com/unsafe/640x640/filters:format(webp)/magento.eigeradventure.com/media/catalog/product/cache/cd1064cf96e0921aa13324f8e3f8fe30/9/1/910007993.blk3.jpg',
        },
        // tumbler: {
        //   shopPage: '',
        //   imgUrl: '',
        // },
        map: 'Taman+Nasional+Gunung+Merapi/@-7.7385535,97.7075336,4z/data=!4m10!1m2!2m1!1staman+nasional+gunung+merapi!3m6!1s0x2e7a5e7d854354d5:0x37db7afb7cc10e8f!8m2!3d-7.5562379!4d110.4381327!15sChx0YW1hbiBuYXNpb25hbCBndW51bmcgbWVyYXBpWh4iHHRhbWFuIG5hc2lvbmFsIGd1bnVuZyBtZXJhcGmSAQ1uYXRpb25hbF9wYXJrmgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVVJyTFU0M1ZXZEJSUkFC4AEA!16s%2Fg%2F122916g3',
      },
      {
        label: 'Gunung Merbabu',
        province: ['Jawa Tengah'],
        biomes: {
          hutan: 1,
          gunung: 1,
        },
        highlights: [],
        photos: [
          {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Puncak_Suwanting_Taman_Nasional_Gunung_Merbabu.jpg/1280px-Puncak_Suwanting_Taman_Nasional_Gunung_Merbabu.jpg',
            author: 'Daryant.id',
          },
          {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Merbabu_via_Suwanting.jpg/1280px-Merbabu_via_Suwanting.jpg',
            author: 'LiburanBoongan',
          },
        ],
        photoUrls: {},
        tShirt: {
          shopPage: 'eiger-tn-gunung-merbabu-ss-tees',
          imgUrl:
            'https://thumbor.sirclocdn.com/unsafe/640x640/filters:format(webp)/magento.eigeradventure.com/media/catalog/product/cache/cd1064cf96e0921aa13324f8e3f8fe30/9/1/910007994.blk3.jpg',
        },
        // tumbler: {
        //   shopPage: '',
        //   imgUrl: '',
        // },
        website: 'http://tngunungmerbabu.org/',
        map: 'Mount+Merbabu+National+Park/@-7.4752294,110.1881306,10z/data=!4m10!1m2!2m1!1staman+nasional+Gunung+Merbabu!3m6!1s0x2e7a7b493f87e1f1:0x1d33fac9578ead23!8m2!3d-7.4538491!4d110.4381254!15sCh10YW1hbiBuYXNpb25hbCBHdW51bmcgTWVyYmFidVofIh10YW1hbiBuYXNpb25hbCBndW51bmcgbWVyYmFidZIBDW5hdGlvbmFsX3BhcmuaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVUlZla3R0YjFWM0VBReABAA!16s%2Fg%2F1hm6c86tn',
      },
      {
        label: 'Karimunjawa',
        province: ['Jawa Tengah'],
        biomes: {
          hutan: 1,
          pantai: 1,
          laut: 1,
        },
        highlights: [],
        photos: [
          {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Tanjung_Gelam%2C_Taman_Nasional_Karimunjawa.jpg/1280px-Tanjung_Gelam%2C_Taman_Nasional_Karimunjawa.jpg',
            author: 'Chafidwahyu',
          },
          {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Rumah_Nemo_Terbatas.jpg/1280px-Rumah_Nemo_Terbatas.jpg',
            author: 'Burhan Herjah',
          },
        ],
        photoUrls: {},
        website: 'https://tnkarimunjawa.id/dashboard',
        tShirt: {
          shopPage:
            'https://eigeradventure.com/eiger-karimunjawa-national-park-tees',
          imgUrl:
            'https://thumbor.sirclocdn.com/unsafe/640x640/filters:format(webp)/magento.eigeradventure.com/media/catalog/product/cache/cd1064cf96e0921aa13324f8e3f8fe30/9/1/910007997.wht3.jpg',
        },
        // tumbler: {
        //   shopPage: '',
        //   imgUrl: '',
        // },
        map: 'Karimunjawa+National+Park/@-5.8489123,110.1594692,10z/data=!4m10!1m2!2m1!1staman+nasional+Karimunjawa!3m6!1s0x2e73ce1feb1330f3:0x85158ed85809d76e!8m2!3d-5.8489123!4d110.4396206!15sChp0YW1hbiBuYXNpb25hbCBLYXJpbXVuamF3YVocIhp0YW1hbiBuYXNpb25hbCBrYXJpbXVuamF3YZIBDW5hdGlvbmFsX3BhcmuaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVTXdjM0ZNVUZGUkVBReABAA!16s%2Fm%2F09v84cg',
      },
      {
        label: 'Kepulauan Seribu',
        province: ['Jawa Barat'],
        biomes: {
          pantai: 1,
          rawa: 1,
          laut: 1,
        },
        highlights: [],
        photos: [
          {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Biota_pantai_pulau_Pari_Kepulauan_Seribu_%28Taman_Nasional_Kepulauan_Seribu%29.jpg/1280px-Biota_pantai_pulau_Pari_Kepulauan_Seribu_%28Taman_Nasional_Kepulauan_Seribu%29.jpg',
            author: '	Agungpnug',
          },
          {
            url: 'https://upload.wikimedia.org/wikipedia/commons/2/28/Deretan_Pohon_Mangrove_Dalam_Kesatuan_Ekosistem_Pesisir.jpg',
            author: 'Muhamad Rafi Rizqulloh',
          },
        ],
        photoUrls: {},
        // tShirt: {
        //   shopPage: '',
        //   imgUrl: '',
        // },
        tumbler: {
          shopPage:
            'https://eigeradventure.com/eiger-tn-kep-seribu-water-bottle',
          imgUrl:
            'https://thumbor.sirclocdn.com/unsafe/640x640/filters:format(webp)/magento.eigeradventure.com/media/catalog/product/cache/cd1064cf96e0921aa13324f8e3f8fe30/b/o/botol-minum-tumblr-taman-nasional-kepulauan-seribu.jpg',
        },
        website: 'http://www.tnlkepulauanseribu.net/',
        map: 'Taman+Nasional+Kepulauan+Seribu+Pulau+Pramuka/@-5.7453662,106.6064488,15z/data=!3m1!4b1!4m5!3m4!1s0x2e6a74107792be57:0x10dc0063d9262fea!8m2!3d-5.7453663!4d106.6151821',
      },
      {
        label: 'Meru Betiri',
        province: ['Jawa Timur'],
        biomes: {
          gunung: 1,
          pantai: 1,
          hutan: 1,
        },
        highlights: [],
        photos: [
          {
            url: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/Javan_Kingfisher_-_Meru_Bethiri_NP_MG_6571_%2829543573702%29.jpg',
            author: 'Francesco Veronesi from Italy',
          },
          {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Rafflesia_zollingeriana_Kds.jpg/1280px-Rafflesia_zollingeriana_Kds.jpg',
            author: 'Benny Weyara Diendasaputra',
          },
        ],
        photoUrls: {},
        tShirt: {
          shopPage: 'eiger-meru-betiri-national-park-tees',
          imgUrl:
            'https://thumbor.sirclocdn.com/unsafe/640x640/filters:format(webp)/magento.eigeradventure.com/media/catalog/product/cache/cd1064cf96e0921aa13324f8e3f8fe30/9/1/910008004.brw2.jpg',
        },
        // tumbler: {
        //   shopPage: '',
        //   imgUrl: '',
        // },
        website: 'http://www.merubetiri.id/',
        map: 'Meru+Betiri+National+Park/@-8.460121,113.8021472,15z/data=!3m1!4b1!4m5!3m4!1s0x2dd41effffffffaf:0xbd4636084b73e0a0!8m2!3d-8.4601211!4d113.8108805',
      },
      {
        label: 'Ujung Kulon',
        province: ['Jawa Barat'],
        biomes: {
          pantai: 1,
          hutan: 1,
          laut: 1,
        },
        highlights: [],
        photos: [
          {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Ujung_Kulon_National_Park%2C_2014.jpg/1280px-Ujung_Kulon_National_Park%2C_2014.jpg',
            author: 'Achmad Soerio Hutomo',
          },
          {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Kima_sp.%2C_Bibir_Pantai_Cidaon%2C_Taman_Nasional_Ujung_Kulon%2C_15082014.jpg/1280px-Kima_sp.%2C_Bibir_Pantai_Cidaon%2C_Taman_Nasional_Ujung_Kulon%2C_15082014.jpg',
            author: 'FaisalZuhri',
          },
        ],
        photoUrls: {},
        tShirt: {
          shopPage: 'eiger-ujung-kulon-national-park-tees',
          imgUrl:
            'https://thumbor.sirclocdn.com/unsafe/640x640/filters:format(webp)/magento.eigeradventure.com/media/catalog/product/cache/cd1064cf96e0921aa13324f8e3f8fe30/9/1/910008012.wht3.jpg',
        },
        // tumbler: {
        //   shopPage: '',
        //   imgUrl: '',
        // },
        website: 'https://www.ujungkulon.org/',
        map: 'Ujung+Kulon+National+Park/@-6.5736767,105.0409282,9z/data=!4m10!1m2!2m1!1staman+nasional+Ujung+Kulon!3m6!1s0x2e42233395979ea1:0x8df3a34e43b4c872!8m2!3d-6.7846944!4d105.3751088!15sChp0YW1hbiBuYXNpb25hbCBVanVuZyBLdWxvblocIhp0YW1hbiBuYXNpb25hbCB1anVuZyBrdWxvbpIBDW5hdGlvbmFsX3BhcmvgAQA!16zL20vMDJzajRy',
      },
    ],
  },
  kalimantan: {
    id: 'kalimantan',
    label: 'Kalimantan',
    shopPage:
      'eiger-1989-x-taman-nasional/pulau-kalimantan',
    parks: [
      {
        label: 'Betung Kerihun',
        province: ['Kalimantan Barat'],
        biomes: {
          hutan: 1,
        },
        highlights: [],
        photos: [
          {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Orangutan_Pongo_pygmeus_pygmeus.jpg/1280px-Orangutan_Pongo_pygmeus_pygmeus.jpg',
            author: 'Sabar Minsyah',
          },
          {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Menjala_ikan.jpg/1280px-Menjala_ikan.jpg',
            author: "Sekot'ngk",
          },
        ],
        photoUrls: {},
        tShirt: {
          shopPage: 'eiger-betung-kerihun-np-ss-tees',
          imgUrl:
            'https://thumbor.sirclocdn.com/unsafe/640x640/filters:format(webp)/magento.eigeradventure.com/media/catalog/product/cache/cd1064cf96e0921aa13324f8e3f8fe30/9/1/910008035.blk3.jpg',
        },
        // tumbler: {
        //   shopPage: '',
        //   imgUrl: '',
        // },
        website: 'http://tnbkds.menlhk.go.id/',
        map: 'Betung+Kerihun+National+Park/@1.2015147,113.1798442,15z/data=!3m1!4b1!4m5!3m4!1s0x2dfdd5f913defab7:0xb4d6869159bf92ed!8m2!3d1.2015147!4d113.1885775',
      },
      {
        label: 'Bukit Baka-Bukit Raya',
        province: ['Kalimantan Barat'],
        biomes: {
          hutan: 1,
          gunung: 1,
        },
        highlights: [],
        photos: [
          {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Odorrana_hosii_Taman_Nasional_Bukit_Baka_Bukit_Raya.jpg/1280px-Odorrana_hosii_Taman_Nasional_Bukit_Baka_Bukit_Raya.jpg',
            author: 'Amat Ribut',
          },
          {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Juvenile_Tropidolaemus_subannulatus_Taman_Nasional_Bukit_Baka_Bukit_Raya.jpg/1280px-Juvenile_Tropidolaemus_subannulatus_Taman_Nasional_Bukit_Baka_Bukit_Raya.jpg',
            author: 'Amat Ribut',
          },
        ],
        photoUrls: {},
        tShirt: {
          shopPage:
            'eiger-bukit-baka-bukit-raya-national-park-tees',
          imgUrl:
            'https://thumbor.sirclocdn.com/unsafe/640x640/filters:format(webp)/magento.eigeradventure.com/media/catalog/product/cache/cd1064cf96e0921aa13324f8e3f8fe30/9/1/910008024.blk3.jpg',
        },
        // tumbler: {
        //   shopPage: '',
        //   imgUrl: '',
        // },
        website:
          'https://bukitbakabukitraya.org/index.php/main/kontak/',
        map: 'Taman+Nasional+Bukit+Baka+Bukit+Raya/@0.2585464,110.10341,7z/data=!4m10!1m2!2m1!1staman+nasional+Bukit+Baka-Bukit+Raya!3m6!1s0x2e0072731e25a81b:0x2a83ccb751b0eabd!8m2!3d-0.3277921!4d112.4380522!15sCiR0YW1hbiBuYXNpb25hbCBCdWtpdCBCYWthLUJ1a2l0IFJheWGSAQ1uYXRpb25hbF9wYXJr4AEA!16s%2Fm%2F0b74ws4',
      },
      {
        label: 'Danau Sentarum',
        province: ['Kalimantan Barat'],
        biomes: {
          pantai: 1,
          rawa: 1,
          hutan: 1,
        },
        highlights: [],
        photos: [
          {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Lahan_basah_Taman_Nasional_Danau_Sentarum%2C_Kalimantan_Barat.jpg/1280px-Lahan_basah_Taman_Nasional_Danau_Sentarum%2C_Kalimantan_Barat.jpg',
            author: 'RaiyaniM',
          },
          {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Pekaka_emas_%28Pelargopsis_capensis%29_di_Taman_Nasional_Danau_Sentarum.jpg/1280px-Pekaka_emas_%28Pelargopsis_capensis%29_di_Taman_Nasional_Danau_Sentarum.jpg',
            author: 'Bundany',
          },
        ],
        photoUrls: {},
        tShirt: {
          shopPage:
            'eiger-lake-sentarum-national-park-tees',
          imgUrl:
            'https://thumbor.sirclocdn.com/unsafe/640x640/filters:format(webp)/magento.eigeradventure.com/media/catalog/product/cache/cd1064cf96e0921aa13324f8e3f8fe30/9/1/910008009.nav2.jpg',
        },
        // tumbler: {
        //   shopPage: '',
        //   imgUrl: '',
        // },
        website:
          'https://www.kapuashulukab.go.id/home/page/taman-nasional',
        map: 'Sentarum+Lake+National+Park/@0.8303082,112.1681362,15z/data=!3m1!4b1!4m5!3m4!1s0x2e00e82a94b8c5e7:0xbfc12ada8a5b6c9!8m2!3d0.8303082!4d112.1768695',
      },
      {
        label: 'Gunung Palung',
        province: ['Kalimantan Barat'],
        biomes: {
          gunung: 1,
          hutan: 1,
        },
        highlights: [],
        photos: [
          {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Gunung_Palung_Jungle.jpg/1280px-Gunung_Palung_Jungle.jpg',
            author: 'Tom from the Netherlands',
          },
          {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Lubuk_Baji%2C_Kawasan_taman_Nasional_Gunung_Palung_05012017.jpg/1280px-Lubuk_Baji%2C_Kawasan_taman_Nasional_Gunung_Palung_05012017.jpg',
            author: 'Nurhampica',
          },
        ],
        photoUrls: {},
        tShirt: {
          shopPage:
            'eiger-gunung-palung-national-park-tees',
          imgUrl:
            'https://thumbor.sirclocdn.com/unsafe/640x640/filters:format(webp)/magento.eigeradventure.com/media/catalog/product/cache/cd1064cf96e0921aa13324f8e3f8fe30/9/1/910008028.blk3.jpg',
        },
        // tumbler: {
        //   shopPage: '',
        //   imgUrl: '',
        // },
        website:
          'Mount+Palung+National+Park/@-0.2168502,108.8297368,7z/data=!4m10!1m2!2m1!1staman+nasional+Gunung+Palung!3m6!1s0x2e034270cccf20c5:0x8b48466e6c9c97ce!8m2!3d-0.8691694!4d109.9733708!15sChx0YW1hbiBuYXNpb25hbCBHdW51bmcgUGFsdW5nWh4iHHRhbWFuIG5hc2lvbmFsIGd1bnVuZyBwYWx1bmeSAQ1uYXRpb25hbF9wYXJrmgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVVF5YkV3eWN6TjNSUkFC4AEA!16zL20vMGZfajV5',
      },
      {
        label: 'Kayan Mentarang',
        province: ['Kalimantan Utara'],
        biomes: {
          gunung: 1,
          hutan: 1,
          pantai: 1,
        },
        highlights: [],
        photos: [
          {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Across_Tubu_River_in_Kayan_Mentarang_National_Park.jpg/1280px-Across_Tubu_River_in_Kayan_Mentarang_National_Park.jpg',
            author: '	irafina',
          },
          {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/A_soft_shell_turtle_in_Kayan_Mentarang_National_Park.jpg/1280px-A_soft_shell_turtle_in_Kayan_Mentarang_National_Park.jpg',
            author: 'irafina',
          },
        ],
        photoUrls: {},
        tShirt: {
          shopPage:
            'eiger-kayan-mentarang-national-park-tees',
          imgUrl:
            'https://thumbor.sirclocdn.com/unsafe/640x640/filters:format(webp)/magento.eigeradventure.com/media/catalog/product/cache/cd1064cf96e0921aa13324f8e3f8fe30/9/1/910008026.oli3.jpg',
        },
        // tumbler: {
        //   shopPage: '',
        //   imgUrl: '',
        // },
        map: 'Kayan+Mentarang+National+Park/@2.8718169,115.3698422,15z/data=!3m1!4b1!4m5!3m4!1s0x2de5f1f024acf7dd:0x2f283b3e910b04c7!8m2!3d2.8718169!4d115.3785755',
      },
      {
        label: 'Kutai',
        province: ['Kalimantan Timur'],
        biomes: {
          hutan: 1,
          pantai: 1,
          rawa: 1,
        },
        highlights: [],
        photos: [
          {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Jembatan_Gantung_di_Sangkima_Jungle_Park_TN_Kutai.jpg/1280px-Jembatan_Gantung_di_Sangkima_Jungle_Park_TN_Kutai.jpg',
            author: 'Gunawan gtp',
          },
          {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Katak_Pohon_Terbang.jpg/1280px-Katak_Pohon_Terbang.jpg',
            author: 'Innal rahman',
          },
        ],
        photoUrls: {},
        tShirt: {
          shopPage: 'eiger-kutai-national-park-tees',
          imgUrl:
            'https://thumbor.sirclocdn.com/unsafe/640x640/filters:format(webp)/magento.eigeradventure.com/media/catalog/product/cache/cd1064cf96e0921aa13324f8e3f8fe30/9/1/910008000.blk2.jpg',
        },
        // tumbler: {
        //   shopPage: '',
        //   imgUrl: '',
        // },
        map: 'Taman+Nasional+Kutai/@1.273775,111.4095904,6z/data=!4m10!1m2!2m1!1staman+nasional+Kutai!3m6!1s0x320986f1aff7eb11:0x43861657c86e075a!8m2!3d0.4411697!4d117.1110378!15sChR0YW1hbiBuYXNpb25hbCBLdXRhaVoWIhR0YW1hbiBuYXNpb25hbCBrdXRhaZIBD25hdGlvbmFsX2ZvcmVzdJoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VSTmMweDFabEZSRUFF4AEA!16s%2Fg%2F11bzt3jtmm',
      },
      {
        label: 'Sebangau',
        province: ['Kalimantan Tengah'],
        biomes: {
          hutan: 1,
          rawa: 1,
        },
        highlights: [],
        photos: [
          {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Peat-Dome-Rawa-gambut-TN-Sebangau.jpg/1280px-Peat-Dome-Rawa-gambut-TN-Sebangau.jpg',
            author: 'Mankdhay rahman',
          },
          {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Sebangau_River.jpg/1280px-Sebangau_River.jpg',
            author: 'Trebletree',
          },
        ],
        photoUrls: {},
        tShirt: {
          shopPage: 'eiger-sebangau-national-park-tees',
          imgUrl:
            'https://thumbor.sirclocdn.com/unsafe/640x640/filters:format(webp)/magento.eigeradventure.com/media/catalog/product/cache/cd1064cf96e0921aa13324f8e3f8fe30/9/1/910008008.wht3.jpg',
        },
        // tumbler: {
        //   shopPage: '',
        //   imgUrl: '',
        // },
        map: 'Sebangau+National+Park/@-2.5973765,113.6650443,15z/data=!3m1!4b1!4m5!3m4!1s0x2dfcb2f9109ee879:0x40114385e9a1ba41!8m2!3d-2.5973765!4d113.6737776',
      },
      {
        label: 'Tanjung Puting',
        province: ['Kalimantan Tengah'],
        biomes: {
          hutan: 1,
          pantai: 1,
        },
        highlights: [],
        photos: [
          {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Tanjung_Puting_National_Park.jpg/1280px-Tanjung_Puting_National_Park.jpg',
            author: 'Jorge Franganillo',
          },
          {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Wikiearth-Orang_utan_Taman_Nasional_Tanjung_Puting.jpg/1280px-Wikiearth-Orang_utan_Taman_Nasional_Tanjung_Puting.jpg',
            author: 'RaiyaniM',
          },
        ],
        photoUrls: {},
        tShirt: {
          shopPage: 'eiger-tanjung-puting-np-ss-tees',
          imgUrl:
            'https://thumbor.sirclocdn.com/unsafe/640x640/filters:format(webp)/magento.eigeradventure.com/media/catalog/product/cache/cd1064cf96e0921aa13324f8e3f8fe30/9/1/910008032.nav3.jpg',
        },
        // tumbler: {
        //   shopPage: '',
        //   imgUrl: '',
        // },
        map: 'Taman+Nasional+Tanjung+Puting/@-3.0697582,110.8239202,8z/data=!4m10!1m2!2m1!1staman+nasional+Tanjung+Puting!3m6!1s0x2e09a5fcc9bb3c5d:0xddb88e3644e9ea03!8m2!3d-3.0550149!4d111.9184136!15sCh10YW1hbiBuYXNpb25hbCBUYW5qdW5nIFB1dGluZ1ofIh10YW1hbiBuYXNpb25hbCB0YW5qdW5nIHB1dGluZ5IBDW5hdGlvbmFsX3BhcmvgAQA!16s%2Fm%2F06w61t2',
      },
    ],
  },
  maluku: {
    id: 'maluku',
    label: 'Maluku+Papua',
    shopPage:
      'eiger-1989-x-taman-nasional/pulau-maluku-papua',
    parks: [
      {
        label: 'Aketajawe-Lolobata',
        province: ['Maluku'],
        biomes: {
          hutan: 1,
        },
        highlights: [],
        photos: [
          {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Edge_of_Aketajawe-Lolobata_National_Park.jpg/1280px-Edge_of_Aketajawe-Lolobata_National_Park.jpg',
            author: '	exploreplants',
          },
          {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Aketajawe-Lolobata_Forest.jpg/1280px-Aketajawe-Lolobata_Forest.jpg',
            author: 'Akbar raf',
          },
        ],
        photoUrls: {},
        tShirt: {
          shopPage:
            'eiger-aketajawe-lolobata-national-park-tees',
          imgUrl:
            'https://thumbor.sirclocdn.com/unsafe/640x640/filters:format(webp)/magento.eigeradventure.com/media/catalog/product/cache/cd1064cf96e0921aa13324f8e3f8fe30/9/1/910007984.blk3.jpg',
        },
        // tumbler: {
        //   shopPage: '',
        //   imgUrl: '',
        // },
        map: 'Aketajawe+Lolobata+National+Park/@0.6229003,127.6354994,11z/data=!4m10!1m2!2m1!1staman+nasional+Aketajawe-Lolobata!3m6!1s0x329c9277653b73db:0x1fefbcec09bd4cbd!8m2!3d0.7528888!4d127.8051053!15sCiF0YW1hbiBuYXNpb25hbCBBa2V0YWphd2UtTG9sb2JhdGGSAQ9uYXR1cmVfcHJlc2VydmXgAQA!16s%2Fg%2F11b807d_fg',
      },
      {
        label: 'Lorentz',
        province: [
          'Papua Pegunungan',
          'Papua Tengah',
          'Papua Selatan',
        ],
        biomes: {
          hutan: 1,
          gunung: 1,
          rawa: 1,
          pantai: 1,
          sabana: 1,
        },
        highlights: [],
        photos: [
          {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Taman_Nasional_Lorentz.jpg/1280px-Taman_Nasional_Lorentz.jpg',
            author: 'Ganjarmustika1904',
          },
          {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Wikiearth-Danau_Habema_Taman_Nasional_Lorentz.jpg/1280px-Wikiearth-Danau_Habema_Taman_Nasional_Lorentz.jpg',
            author: 'RaiyaniM',
          },
        ],
        photoUrls: {},
        tShirt: {
          shopPage: 'eiger-lorentz-nat-park-ss-tees',
          imgUrl:
            'https://thumbor.sirclocdn.com/unsafe/640x640/filters:format(webp)/magento.eigeradventure.com/media/catalog/product/cache/cd1064cf96e0921aa13324f8e3f8fe30/9/1/910008002.oli3.jpg',
        },
        // tumbler: {
        //   shopPage: '',
        //   imgUrl: '',
        // },
        map: 'Lorentz+National+Park/@-4.6297633,137.9726829,15z/data=!4m14!1m6!3m5!1s0x683ada72cad8bf5b:0xe5acb2b81cad387f!2sLorentz+National+Park!8m2!3d-4.6297633!4d137.9726829!3m6!1s0x683ada72cad8bf5b:0xe5acb2b81cad387f!8m2!3d-4.6297633!4d137.9726829!15sChZ0YW1hbiBuYXNpb25hbCBMb3JlbnR6WhgiFnRhbWFuIG5hc2lvbmFsIGxvcmVudHqSAQ1uYXRpb25hbF9wYXJr4AEA!16zL20vMDJ4MW14',
      },
      {
        label: 'Manusela',
        province: ['Maluku'],
        biomes: {
          gunung: 1,
          hutan: 1,
          rawa: 1,
          pantai: 1,
        },
        highlights: [],
        photos: [
          {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/The_jungle_of_Manusela_Nationalpark.jpg/1280px-The_jungle_of_Manusela_Nationalpark.jpg',
            author: 'Fabian Lambeck',
          },
          {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Manusela_National_park.jpg/1280px-Manusela_National_park.jpg',
            author: 'Chikicaca',
          },
        ],
        photoUrls: {},
        tShirt: {
          shopPage: 'eiger-manusela-national-park-tees',
          imgUrl:
            'https://thumbor.sirclocdn.com/unsafe/640x640/filters:format(webp)/magento.eigeradventure.com/media/catalog/product/cache/cd1064cf96e0921aa13324f8e3f8fe30/9/1/910008006.brw3.jpg',
        },
        // tumbler: {
        //   shopPage: '',
        //   imgUrl: '',
        // },
        website: 'http://tnmanusela.menlhk.go.id/',
        map: 'Manusela+National+Park/@-3.0751277,129.611233,15z/data=!3m1!4b1!4m5!3m4!1s0x2d6a3e86e135f24f:0x123b0ca6b8339a6e!8m2!3d-3.0751277!4d129.6199663',
      },
      {
        label: 'Teluk Cenderawasih',
        province: ['Papua Barat'],
        biomes: {
          rawa: 1,
          pantai: 1,
          laut: 1,
        },
        highlights: [],
        photos: [
          {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Hiu_Paus_yang_kesepian.jpg/1280px-Hiu_Paus_yang_kesepian.jpg',
            author: 'Rogistira',
          },
          {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Aku_dan_Alamku.jpg/1280px-Aku_dan_Alamku.jpg',
            author: 'Rogistira',
          },
        ],
        photoUrls: {},
        tShirt: {
          shopPage: 'eiger-teluk-cenderawasih-ss-tees',
          imgUrl:
            'https://thumbor.sirclocdn.com/unsafe/640x640/filters:format(webp)/magento.eigeradventure.com/media/catalog/product/cache/cd1064cf96e0921aa13324f8e3f8fe30/9/1/910008025.blk3.jpg',
        },
        // tumbler: {
        //   shopPage: '',
        //   imgUrl: '',
        // },
        website:
          'https://telukcenderawasihnationalpark.com/',
        map: 'Taman+Nasional+Teluk+Cenderawasih/@-2.548225,134.4696488,15z/data=!3m1!4b1!4m5!3m4!1s0x2d4b62bec61af6ef:0x758ba1aa8c8a474a!8m2!3d-2.548225!4d134.4783821',
      },
      {
        label: 'Wasur',
        province: ['Papua Selatan'],
        biomes: {
          hutan: 1,
          rawa: 1,
          sabana: 1,
        },
        highlights: [],
        photos: [
          {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Melaleuca.Sp_lahan_basah_TN_Wasur.jpg/1280px-Melaleuca.Sp_lahan_basah_TN_Wasur.jpg',
            author: 'Arifrudiana 011213',
          },
          {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/TN_Wasur.jpg/1280px-TN_Wasur.jpg',
            author: 'Arifrudiana 011213',
          },
        ],
        photoUrls: {},
        tShirt: {
          shopPage: 'eiger-wasur-nat-park-ss-tees',
          imgUrl:
            'https://thumbor.sirclocdn.com/unsafe/640x640/filters:format(webp)/magento.eigeradventure.com/media/catalog/product/cache/cd1064cf96e0921aa13324f8e3f8fe30/9/1/910008140.brw3.jpg',
        },
        // tumbler: {
        //   shopPage: '',
        //   imgUrl: '',
        // },
        map: 'Wasur+National+Park/@-5.5058221,128.6294863,5z/data=!4m10!1m2!2m1!1staman+nasional+Wasur!3m6!1s0x69b4e631290c67f1:0xb755331f65faa39!8m2!3d-8.6006357!4d140.8336815!15sChR0YW1hbiBuYXNpb25hbCBXYXN1cloWIhR0YW1hbiBuYXNpb25hbCB3YXN1cpIBDW5hdGlvbmFsX3BhcmvgAQA!16s%2Fm%2F09gjc00',
      },
    ],
  },
  sulawesi: {
    id: 'sulawesi',
    label: 'Sulawesi',
    shopPage: 'eiger-1989-x-taman-nasional/pulau-sulawesi',
    parks: [
      {
        label: 'Bantimurung-Bulusaraung',
        province: ['Sulawesi Selatan'],
        biomes: {
          hutan: 1,
          gunung: 1,
        },
        highlights: [],
        photos: [
          {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Mount_Karst_and_lakes_in_Bantimurung_-_Bulusaraung_National_Park.jpg/1280px-Mount_Karst_and_lakes_in_Bantimurung_-_Bulusaraung_National_Park.jpg',
            author: 'Aalmarusy',
          },
          {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/SYA041071.jpg/1280px-SYA041071.jpg',
            author: 'Alampapoto',
          },
        ],
        photoUrls: {},
        tShirt: {
          shopPage: 'eiger-bantimurung-bulusaraung-np-tees',
          imgUrl:
            'https://thumbor.sirclocdn.com/unsafe/640x640/filters:format(webp)/magento.eigeradventure.com/media/catalog/product/cache/cd1064cf96e0921aa13324f8e3f8fe30/9/1/910007986.blk3.jpg',
        },
        // tumbler: {
        //   shopPage: '',
        //   imgUrl: '',
        // },
        website: 'http://www.tn-babul.org/',
        map: 'Balai+Taman+Nasional+Bantimurung+Bulusaraung/@-4.9128613,119.6042063,11z/data=!4m10!1m2!2m1!1staman+nasional+Bantimurung-Bulusaraung!3m6!1s0x2dbe8b53c5c9f55b:0x9d78ef1e3968b717!8m2!3d-4.8011838!4d119.8234977!15sCiZ0YW1hbiBuYXNpb25hbCBCYW50aW11cnVuZy1CdWx1c2FyYXVuZ1ooIiZ0YW1hbiBuYXNpb25hbCBiYW50aW11cnVuZyBidWx1c2FyYXVuZ5IBDW5hdGlvbmFsX3BhcmuaASRDaGREU1VoTk1HOW5TMFZKUTBGblNVTnZjVFV0Ym1oM1JSQULgAQA!16s%2Fm%2F0b76lm6',
      },
      {
        label: 'Bogani Nani Wartabone',
        province: ['Gorontalo', 'Sulawesi Utara'],
        biomes: {
          hutan: 1,
        },
        highlights: [],
        photos: [
          {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Hutan_Hungayono.jpg/1280px-Hutan_Hungayono.jpg',
            author: 'Hardi A. Gani',
          },
          {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Walik_Sulawesi_%28Walik_Malomiti%29_%28cropped%29.jpg/1280px-Walik_Sulawesi_%28Walik_Malomiti%29_%28cropped%29.jpg',
            author: 'Nicovanmalir',
          },
        ],
        photoUrls: {},
        tShirt: {
          shopPage: 'eiger-bogani-nw-national-park-tees',
          imgUrl:
            'https://thumbor.sirclocdn.com/unsafe/640x640/filters:format(webp)/magento.eigeradventure.com/media/catalog/product/cache/cd1064cf96e0921aa13324f8e3f8fe30/9/1/910007988.nav2.jpg',
        },
        // tumbler: {
        //   shopPage: '',
        //   imgUrl: '',
        // },
        map: 'Bogani+Nani+Wartabone+National+Park/@0.5743267,122.6021913,8z/data=!3m1!4b1!4m5!3m4!1s0x327ef944f4d51193:0x1cbf7b39cd7b3b8f!8m2!3d0.5634482!4d123.7070619',
      },
      {
        label: 'Bunaken',
        province: ['Sulawesi Utara'],
        biomes: {
          pantai: 1,
          laut: 1,
        },
        highlights: [],
        photos: [
          {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Bunaken_Marine_Park.JPG/1280px-Bunaken_Marine_Park.JPG',
            author: 'Sakurai Midori',
          },
          {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Bunaken_Mangrove_Coast.JPG/1280px-Bunaken_Mangrove_Coast.JPG',
            author: 'Bunaken Island',
          },
        ],
        photoUrls: {},
        tShirt: {
          shopPage: 'eiger-bunaken-national-park-tees',
          imgUrl:
            'https://thumbor.sirclocdn.com/unsafe/640x640/filters:format(webp)/magento.eigeradventure.com/media/catalog/product/cache/cd1064cf96e0921aa13324f8e3f8fe30/9/1/910007991.wht2.jpg',
        },
        // tumbler: {
        //   shopPage: '',
        //   imgUrl: '',
        // },
        map: 'Bunaken+National+Marine+Park/@1.675843,124.7469084,15z/data=!3m1!4b1!4m5!3m4!1s0x2d7873db0880843f:0x606df49ef663eff7!8m2!3d1.675843!4d124.7556417',
      },
      {
        label: 'Kepulauan Togean',
        province: ['Sulawesi Tengah'],
        biomes: {
          hutan: 1,
          pantai: 1,
          laut: 1,
        },
        highlights: [],
        photos: [
          {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Kadidiri%2C_morning_view_%286972093459%29.jpg/1280px-Kadidiri%2C_morning_view_%286972093459%29.jpg',
            author: 'Arian Zwegers',
          },
          {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Ubur-ubur_Tak_Berbisa_dari_Togean.jpg/1280px-Ubur-ubur_Tak_Berbisa_dari_Togean.jpg',
            author: 'Mangkau Zulkifli',
          },
        ],
        photoUrls: {},
        tShirt: {
          shopPage: 'eiger-togean-national-park-tees',
          imgUrl:
            'https://thumbor.sirclocdn.com/unsafe/640x640/filters:format(webp)/magento.eigeradventure.com/media/catalog/product/cache/cd1064cf96e0921aa13324f8e3f8fe30/9/1/910008011.wht3.jpg',
        },
        // tumbler: {
        //   shopPage: '',
        //   imgUrl: '',
        // },
        website: 'https://tnkepulauantogean.id/',
        map: 'Kepulauan+Togean+National+Park/@-0.4419828,121.3421579,9z/data=!3m1!4b1!4m5!3m4!1s0x2d87c934ccbae65d:0x89d4c8c1a5fe86ca!8m2!3d-0.4352753!4d121.8999561',
      },
      {
        label: 'Lore Lindu',
        province: ['Sulawesi Tengah'],
        biomes: {
          gunung: 1,
          hutan: 1,
          pantai: 1,
          sabana: 1,
        },
        highlights: ['Patung-patung Megalit'],
        photos: [
          {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Danau_Lindu_w_bird_2007.jpg/1280px-Danau_Lindu_w_bird_2007.jpg',
            author: 'Aidenvironment, 2007',
          },
          {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Baula_Patung_Kepala_Kerbau_di_Taman_Nasional_Lore_Lindu.jpg/1280px-Baula_Patung_Kepala_Kerbau_di_Taman_Nasional_Lore_Lindu.jpg',
            author: 'Lo2asinamura',
          },
        ],
        photoUrls: {},
        tShirt: {
          shopPage: 'eiger-lore-lindu-nat-park-tees',
          imgUrl:
            'https://thumbor.sirclocdn.com/unsafe/640x640/filters:format(webp)/magento.eigeradventure.com/media/catalog/product/cache/cd1064cf96e0921aa13324f8e3f8fe30/9/1/910008001.oli3.jpg',
        },
        // tumbler: {
        //   shopPage: '',
        //   imgUrl: '',
        // },
        website: 'http://www.lorelindu.info/',
        map: 'Lore+Lindu+National+Park/@-1.1910908,119.5474426,9z/data=!4m10!1m2!2m1!1staman+nasional+Lore+Lindu!3m6!1s0x2d8e82e95806f055:0xfff2d0319faff404!8m2!3d-1.4749503!4d120.1889421!15sChl0YW1hbiBuYXNpb25hbCBMb3JlIExpbmR1WhsiGXRhbWFuIG5hc2lvbmFsIGxvcmUgbGluZHWSAQ1uYXRpb25hbF9wYXJrmgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVU5OTjJGZmR6bDNSUkFC4AEA!16zL20vMDk3NW16',
      },
      {
        label: 'Rawa Aopa Watumohai',
        province: ['Sulawesi Tenggara'],
        biomes: {
          hutan: 1,
          rawa: 1,
          sabana: 1,
        },
        highlights: [],
        photos: [
          {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Taman_Nasional_Rawa_Aopa_Watumohai.jpg/1280px-Taman_Nasional_Rawa_Aopa_Watumohai.jpg',
            author: 'Bangojeck',
          },
          {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Taman_Nasional_Rawa_Aopa_Watumohai_-_Kenangan_Tentang_Rawaku.jpg/1280px-Taman_Nasional_Rawa_Aopa_Watumohai_-_Kenangan_Tentang_Rawaku.jpg',
            author: 'EfraimJF',
          },
        ],
        photoUrls: {},
        tShirt: {
          shopPage:
            'eiger-rawa-aopa-watumohai-national-park-tees',
          imgUrl:
            'https://thumbor.sirclocdn.com/unsafe/640x640/filters:format(webp)/magento.eigeradventure.com/media/catalog/product/cache/cd1064cf96e0921aa13324f8e3f8fe30/9/1/910008005.blk2.jpg',
        },
        // tumbler: {
        //   shopPage: '',
        //   imgUrl: '',
        // },
        map: 'Taman+Nasional+Rawa+Aopa+Watumohai/@-4.4383318,121.8645221,15z/data=!3m1!4b1!4m5!3m4!1s0x2da290ff283ae6bf:0x4a645ee17a3c085d!8m2!3d-4.4383319!4d121.8732554',
      },
      {
        label: 'Taka Bonerate',
        province: ['Sulawesi Selatan'],
        biomes: {
          pantai: 1,
          laut: 1,
        },
        highlights: [],
        photos: [
          {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Keindahan_Taman_Nasional_Takabonerate.jpg/1280px-Keindahan_Taman_Nasional_Takabonerate.jpg',
            author: 'RaiyaniM',
          },
          {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Pulau_Tinabo_di_Taman_Nasional_Takabonerate.jpg/1280px-Pulau_Tinabo_di_Taman_Nasional_Takabonerate.jpg',
            author: 'RaiyaniM',
          },
        ],
        photoUrls: {},
        tShirt: {
          shopPage: 'eiger-taka-bonerate-np-ss-tees',
          imgUrl:
            'https://thumbor.sirclocdn.com/unsafe/640x640/filters:format(webp)/magento.eigeradventure.com/media/catalog/product/cache/cd1064cf96e0921aa13324f8e3f8fe30/9/1/910008023.wht2.jpg',
        },
        // tumbler: {
        //   shopPage: '',
        //   imgUrl: '',
        // },
        website: 'http://www.tntakabonerate.com/',
        map: 'Taka+Bonerate+National+Park/@-6.5670767,121.0902517,15z/data=!3m1!4b1!4m5!3m4!1s0x2dba800601880971:0xeecdf9f3d894fed4!8m2!3d-6.5670768!4d121.098985',
      },
      {
        label: 'Wakatobi',
        province: ['Sulawesi Tenggara'],
        biomes: {
          pantai: 1,
          laut: 1,
        },
        highlights: [],
        photos: [
          {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Wakatobi_beach_2006.jpg/1280px-Wakatobi_beach_2006.jpg',
            author: 'Jenny from Taipei',
          },
          {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Sea_urchin%2C_liabale_west%2C_wakatobi%2C_2018_%2831942261738%29.jpg/1280px-Sea_urchin%2C_liabale_west%2C_wakatobi%2C_2018_%2831942261738%29.jpg',
            author: 'q phia',
          },
        ],
        photoUrls: {},
        tShirt: {
          shopPage: 'eiger-wakatobi-nat-park-tees',
          imgUrl:
            'https://thumbor.sirclocdn.com/unsafe/640x640/filters:format(webp)/magento.eigeradventure.com/media/catalog/product/cache/cd1064cf96e0921aa13324f8e3f8fe30/9/1/910008022.nav2.jpg',
        },
        // tumbler: {
        //   shopPage: '',
        //   imgUrl: '',
        // },
        map: 'Wakatobi+National+Park/@-5.971406,111.929896,5z/data=!4m10!1m2!2m1!1staman+nasional+Wakatobi!3m6!1s0x2da70432508addb7:0x5d26a2de09c86794!8m2!3d-5.5634736!4d123.9304254!15sChd0YW1hbiBuYXNpb25hbCBXYWthdG9iaVoZIhd0YW1hbiBuYXNpb25hbCB3YWthdG9iaZIBDW5hdGlvbmFsX3BhcmuaASRDaGREU1VoTk1HOW5TMFZKUTBGblNVTnZNRGREU0RkUlJSQULgAQA!16s%2Fm%2F0b7419q',
      },
      {
        label: 'Gandangdewata',
        province: ['Sulawesi Barat'],
        biomes: {
          hutan: 1,
          gunung: 1,
        },
        highlights: [],
        photos: [
          {
            url: '',
            author: '',
          },
          {
            url: '',
            author: '',
          },
        ],
        photoUrls: {},
        tShirt: {
          shopPage: 'eiger-gandang-dewata-np-ss-tees',
          imgUrl:
            'https://thumbor.sirclocdn.com/unsafe/640x640/filters:format(webp)/magento.eigeradventure.com/media/catalog/product/cache/cd1064cf96e0921aa13324f8e3f8fe30/k/a/kaos-lengan-pendek-pria-gandang-dewata.jpg',
        },
        // tumbler: {
        //   shopPage: '',
        //   imgUrl: '',
        // },
        map: 'Gandang+Dewata+National+Park/@-2.9351907,119.4208071,15z/data=!3m1!4b1!4m5!3m4!1s0x2d93a15a3bcb1e1d:0xd01d1ea92b4981c6!8m2!3d-2.9351907!4d119.4295404',
      },
    ],
  },
  sumatra: {
    id: 'sumatra',
    label: 'Sumatra',
    shopPage: 'eiger-1989-x-taman-nasional/pulau-sumatera',
    parks: [
      {
        label: 'Batang Gadis',
        province: ['Sumatra Utara'],
        biomes: {
          hutan: 1,
          rawa: 1,
          gunung: 1,
        },
        highlights: [],
        photos: [
          {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Jalur_Trekking_Hutan_di_Taman_Nasional_Batang_Gadis.jpg/1280px-Jalur_Trekking_Hutan_di_Taman_Nasional_Batang_Gadis.jpg',
            author: 'Lo2asinamura',
          },
          {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Air_Terjun_Air_Panas_di_Taman_Nasional_Batang_Gadis.jpg/1280px-Air_Terjun_Air_Panas_di_Taman_Nasional_Batang_Gadis.jpg',
            author: 'Lo2asinamura',
          },
        ],
        photoUrls: {},
        tShirt: {
          shopPage: 'eiger-batang-gadis-national-park-tees',
          imgUrl:
            'https://thumbor.sirclocdn.com/unsafe/640x640/filters:format(webp)/magento.eigeradventure.com/media/catalog/product/cache/cd1064cf96e0921aa13324f8e3f8fe30/9/1/910007987.blk2.jpg',
        },
        // tumbler: {
        //   shopPage: '',
        //   imgUrl: '',
        // },
        map: 'Batang+Gadis+National+Park/@0.8308971,99.5558624,15z/data=!3m1!4b1!4m5!3m4!1s0x302a2812fd43c9ed:0xf2818dd62265843a!8m2!3d0.8308971!4d99.5645957',
      },
      {
        label: 'Berbak',
        province: ['Jambi'],
        biomes: {
          hutan: 1,
          rawa: 1,
        },
        highlights: [],
        photos: [
          {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Berbak_National_Park_2012.jpg/1280px-Berbak_National_Park_2012.jpg',
            author:
              'Photo by James Maiden www.cifor.org Center for International Forestry Research',
          },
          {
            url: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Sumatra_Banner.jpg',
            author:
              'Photo by James Maiden www.cifor.org Center for International Forestry Research',
          },
        ],
        photoUrls: {},
        tShirt: {
          shopPage: 'eiger-berbak-national-park-tees',
          imgUrl:
            'https://thumbor.sirclocdn.com/unsafe/640x640/filters:format(webp)/magento.eigeradventure.com/media/catalog/product/cache/cd1064cf96e0921aa13324f8e3f8fe30/9/1/910008013.blk3.jpg',
        },
        // tumbler: {
        //   shopPage: '',
        //   imgUrl: '',
        // },
        map: 'Berbak+National+Park/@-0.6005181,97.6241211,6z/data=!4m10!1m2!2m1!1staman+nasional+Berbak!3m6!1s0x2e25d32ed87f82c7:0x8fbf93c873d49c9!8m2!3d-1.2868651!4d104.2395942!15sChV0YW1hbiBuYXNpb25hbCBCZXJiYWuSAQ1uYXRpb25hbF9wYXJr4AEA!16s%2Fm%2F09gq9f1',
      },
      {
        label: 'Bukit Barisan Selatan',
        province: ['Lampung', 'Bengkulu'],
        biomes: {
          hutan: 1,
          rawa: 1,
          gunung: 1,
          pantai: 1,
        },
        highlights: [
          'Gajah Sumatra',
          'Badak Sumatra',
          'Harimau Sumatra',
        ],
        photos: [
          {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/KPL_4120_01_terbang_diatas_danau_asam.jpg/1280px-KPL_4120_01_terbang_diatas_danau_asam.jpg',
            author: 'Eka fendiaspara',
          },
          {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Gajah_Tunggang_Suryono.jpg/1280px-Gajah_Tunggang_Suryono.jpg',
            author: 'Datin KSDAE',
          },
        ],
        photoUrls: {},
        tShirt: {
          shopPage:
            'eiger-bukit-barisan-selatan-national-park-tees',
          imgUrl:
            'https://thumbor.sirclocdn.com/unsafe/640x640/filters:format(webp)/magento.eigeradventure.com/media/catalog/product/cache/cd1064cf96e0921aa13324f8e3f8fe30/9/1/910007990.blk2.jpg',
        },
        // tumbler: {
        //   shopPage: '',
        //   imgUrl: '',
        // },
        map: 'Taman+Nasional+Bukit+Barisan+Selatan/@-5.4484731,104.3428551,15z/data=!3m1!4b1!4m5!3m4!1s0x2e47a3f773b8424f:0x22326de247661645!8m2!3d-5.4484732!4d104.3515884',
      },
      {
        label: 'Bukit Duabelas',
        province: ['Jambi'],
        biomes: {
          hutan: 1,
        },
        highlights: [],
        // Orang Rimba
        photos: [
          {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Menjulang_Taman_Nasional_Bukit_Duabelas.jpg/1280px-Menjulang_Taman_Nasional_Bukit_Duabelas.jpg',
            author: 'Abusalwasalmanshakila',
          },
          {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Kantung_Semar.jpg/1280px-Kantung_Semar.jpg',
            author: 'Abusalwasalmanshakila',
          },
        ],
        photoUrls: {},
        tShirt: {
          shopPage: 'eiger-bukit-duabelas-np-ss-tees',
          imgUrl:
            'https://thumbor.sirclocdn.com/unsafe/640x640/filters:format(webp)/magento.eigeradventure.com/media/catalog/product/cache/cd1064cf96e0921aa13324f8e3f8fe30/0/0/000000000910008021.jpg',
        },
        // tumbler: {
        //   shopPage: '',
        //   imgUrl: '',
        // },
        map: 'Bukit+Duabelas+National+Park/@-3.6858755,101.4163765,7z/data=!4m10!1m2!2m1!1staman+nasional+Bukit+Duabelas!3m6!1s0x2e2e5220a042ef99:0xa504b54550a37423!8m2!3d-1.91667!4d102.71361!15sCh10YW1hbiBuYXNpb25hbCBCdWtpdCBEdWFiZWxhc5IBDW5hdGlvbmFsX3BhcmvgAQA!16s%2Fm%2F09v7cf6',
      },
      {
        label: 'Bukit Tiga Puluh',
        province: ['Jambi'],
        biomes: {
          hutan: 1,
        },
        highlights: [
          'Orang Utan Sumatra',
          'Gajah Sumatra',
          'Badak Sumatra',
          'Harimau Sumatra',
          'Tapir Asia',
          'Beruang Madu',
        ],
        photos: [
          {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Camp_Granit.jpg/1280px-Camp_Granit.jpg',
            author: 'Ipongk 99',
          },
          {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Air_Terjun_Kembar_Denalo.jpg/1280px-Air_Terjun_Kembar_Denalo.jpg',
            author: 'Ipongk 99',
          },
        ],
        photoUrls: {},
        tShirt: {
          shopPage: 'eiger-bukit-tigapuluh-ss-tees',
          imgUrl:
            'https://thumbor.sirclocdn.com/unsafe/640x640/filters:format(webp)/magento.eigeradventure.com/media/catalog/product/cache/cd1064cf96e0921aa13324f8e3f8fe30/9/1/910008020.oli2.jpg',
        },
        // tumbler: {
        //   shopPage: '',
        //   imgUrl: '',
        // },
        map: 'Bukit+Tigapuluh+National+Park/@-1.0218727,100.1548122,7z/data=!3m1!4b1!4m5!3m4!1s0x2e293ed8ef754bab:0xdae433a543b2a5ae!8m2!3d-0.922584!4d102.4684642',
      },
      {
        label: 'Gunung Leuser',
        province: ['Aceh', 'Sumatra Utara'],
        biomes: {
          gunung: 1,
          hutan: 1,
          pantai: 1,
        },
        highlights: [],
        photos: [
          {
            url: 'https://upload.wikimedia.org/wikipedia/commons/2/2b/Taman_Nasional_Gunung_Leuser.jpg',
            author: 'Junaidi Hanafiah',
          },
          {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Bayi_Gajah_Lahir_di_Taman_Nasional_Gunung_Leuser.jpg/1280px-Bayi_Gajah_Lahir_di_Taman_Nasional_Gunung_Leuser.jpg',
            author: 'Ardianjusto',
          },
        ],
        photoUrls: {},
        tShirt: {
          shopPage:
            'eiger-tn-gunung-leuser-national-park-tees',
          imgUrl:
            'https://thumbor.sirclocdn.com/unsafe/640x640/filters:format(webp)/magento.eigeradventure.com/media/catalog/product/cache/cd1064cf96e0921aa13324f8e3f8fe30/9/1/910008019.nav2.jpg',
        },
        // tumbler: {
        //   shopPage: '',
        //   imgUrl: '',
        // },
        map: 'Mount+Leuser+National+Park/@3.784349,96.9786188,10z/data=!3m1!4b1!4m5!3m4!1s0x3039861c87a73591:0x3f1b67119f4d54b2!8m2!3d3.5192923!4d97.4634372',
      },
      {
        label: 'Kerinci Seblat',
        province: [
          'Sumatra Barat',
          'Jambi',
          'Bengkulu',
          'Sumatra Selatan',
        ],
        biomes: {
          hutan: 1,
          rawa: 1,
          sabana: 1,
          gunung: 1,
          pantai: 1,
        },
        highlights: [],
        photos: [
          {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Air_Terjun_Telun_Berasap.jpg/1280px-Air_Terjun_Telun_Berasap.jpg',
            author: 'Iggoy el Fitra',
          },
          {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Bajing_garis_tiga.jpg/1280px-Bajing_garis_tiga.jpg',
            author: 'Asyief.khasan',
          },
        ],
        photoUrls: {},
        tShirt: {
          shopPage: 'eiger-kerinci-seblat-np-ss-tees',
          imgUrl:
            'https://thumbor.sirclocdn.com/unsafe/640x640/filters:format(webp)/magento.eigeradventure.com/media/catalog/product/cache/cd1064cf96e0921aa13324f8e3f8fe30/9/1/910008037.oli2.jpg',
        },
        // tumbler: {
        //   shopPage: '',
        //   imgUrl: '',
        // },
        website: 'http://tnkerinciseblat.or.id//',
        map: 'Kerinci+Seblat+National+Park/@3.7375648,88.2308873,5z/data=!4m10!1m2!2m1!1staman+nasional+Kerinci+Seblat!3m6!1s0x2fd4ceffffffffe9:0x359c1a4df8b20142!8m2!3d-0.8571655!4d100.5080456!15sCh10YW1hbiBuYXNpb25hbCBLZXJpbmNpIFNlYmxhdFofIh10YW1hbiBuYXNpb25hbCBrZXJpbmNpIHNlYmxhdJIBDW5hdGlvbmFsX3BhcmuaASRDaGREU1VoTk1HOW5TMFZKUTBGblNVTTBhbTh0Wm1wM1JSQULgAQA!16s%2Fg%2F11ggjdx3bv',
      },
      {
        label: 'Sembilang',
        province: ['Sumatra Selatan'],
        biomes: {
          hutan: 1,
          rawa: 1,
          pantai: 1,
        },
        highlights: [
          'Perkembangbiakan bangau bluwok',
          'terbesar di dunia',
        ],
        photos: [
          {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Migrasi_Burung.jpg/1280px-Migrasi_Burung.jpg',
            author: 'HARRY SANJAYA PUTRA',
          },
          {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Burung_Migrasi_Taman_Nasional_Sembilang.jpg/1280px-Burung_Migrasi_Taman_Nasional_Sembilang.jpg',
            author: 'Domiyanto',
          },
        ],
        photoUrls: {},
        tShirt: {
          shopPage: 'eiger-sembilang-national-park-tees',
          imgUrl:
            'https://thumbor.sirclocdn.com/unsafe/640x640/filters:format(webp)/magento.eigeradventure.com/media/catalog/product/cache/cd1064cf96e0921aa13324f8e3f8fe30/9/1/910008034.blk3.jpg',
        },
        // tumbler: {
        //   shopPage: '',
        //   imgUrl: '',
        // },
        map: 'Taman+Nasional+Sembilang/@-2.0356268,104.6505448,15z/data=!3m1!4b1!4m5!3m4!1s0x2e24eb1722963935:0xa0a93a20ae3efaa!8m2!3d-2.0356268!4d104.6592781',
      },
      {
        label: 'Siberut',
        province: ['Sumatra Barat'],
        biomes: {
          hutan: 1,
          rawa: 1,
          pantai: 1,
        },
        highlights: [],
        photos: [
          {
            url: '',
            author: '',
          },
          {
            url: '',
            author: '',
          },
        ],
        photoUrls: {},
        tShirt: {
          shopPage: 'eiger-tn-siberut-ss-tees',
          imgUrl:
            'https://thumbor.sirclocdn.com/unsafe/640x640/filters:format(webp)/magento.eigeradventure.com/media/catalog/product/cache/cd1064cf96e0921aa13324f8e3f8fe30/9/1/910008036.brw3.jpg',
        },
        // tumbler: {
        //   shopPage: '',
        //   imgUrl: '',
        // },
        map: 'Siberut+Island+National+Park/@-1.452205,92.6003538,5z/data=!4m10!1m2!2m1!1staman+nasional+Siberut!3m6!1s0x2fd148fb73a95817:0x462014f3734dbbc4!8m2!3d-1.3174892!4d98.8891625!15sChZ0YW1hbiBuYXNpb25hbCBTaWJlcnV0WhgiFnRhbWFuIG5hc2lvbmFsIHNpYmVydXSSAQ1uYXRpb25hbF9wYXJrmgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVVJKZFRWNWNsZEJFQUXgAQA!16zL20vMDl2XzZz',
      },
      {
        label: 'Tesso Nilo',
        province: ['Riau'],
        biomes: {
          hutan: 1,
        },
        highlights: [],
        photos: [
          {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Tesso_Nilo_2009.jpg/1280px-Tesso_Nilo_2009.jpg',
            author: 'A. C. Shapiro from Capitol City, USA',
          },
          {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Bayi_gajah_Sumatera_di_Taman_Nasional_Tesso_Nilo.jpg/1280px-Bayi_gajah_Sumatera_di_Taman_Nasional_Tesso_Nilo.jpg',
            author: 'Afrianto silalahi',
          },
        ],
        photoUrls: {},
        tShirt: {
          shopPage: 'eiger-tesso-nilo-national-park-tees',
          imgUrl:
            'https://thumbor.sirclocdn.com/unsafe/640x640/filters:format(webp)/magento.eigeradventure.com/media/catalog/product/cache/cd1064cf96e0921aa13324f8e3f8fe30/9/1/910008015.blk2.jpg',
        },
        // tumbler: {
        //   shopPage: '',
        //   imgUrl: '',
        // },
        map: 'Tesso+Nilo+National+Park/@-0.0758334,101.6143232,15z/data=!3m1!4b1!4m5!3m4!1s0x2e2a7125c045e615:0xb1a6a44b16aa1c54!8m2!3d-0.0758334!4d101.6230565',
      },
      {
        label: 'Way Kambas',
        province: ['Lampung'],
        biomes: {
          hutan: 1,
          rawa: 1,
          sabana: 1,
          pantai: 1,
        },
        highlights: [],
        photos: [
          {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Sumatran_Surili.jpg/1280px-Sumatran_Surili.jpg',
            author: 'Ridwansgh',
          },
          {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Sofyane_efendi_Kembali_Pulang_IMG_5091.jpg/1280px-Sofyane_efendi_Kembali_Pulang_IMG_5091.jpg',
            author: 'Sofyanephoto',
          },
        ],
        photoUrls: {},
        tShirt: {
          shopPage: 'eiger-way-kambas-national-park-tees',
          imgUrl:
            'https://thumbor.sirclocdn.com/unsafe/640x640/filters:format(webp)/magento.eigeradventure.com/media/catalog/product/cache/cd1064cf96e0921aa13324f8e3f8fe30/9/1/910008014.blk3.jpg',
        },
        // tumbler: {
        //   shopPage: '',
        //   imgUrl: '',
        // },
        map: 'Way+Kambas+National+Park/@-5.0032731,105.6702733,12z/data=!4m10!1m2!2m1!1staman+nasional+Way+Kambas!3m6!1s0x2e40813cf143bc13:0x4c426b2efc4681a3!8m2!3d-4.9275758!4d105.7769283!15sChl0YW1hbiBuYXNpb25hbCBXYXkgS2FtYmFzWhsiGXRhbWFuIG5hc2lvbmFsIHdheSBrYW1iYXOSAQ1uYXRpb25hbF9wYXJr4AEA!16zL20vMDlkdnJz',
      },
      {
        label: 'Zamrud',
        province: ['Riau'],
        biomes: {
          hutan: 1,
          rawa: 1,
        },
        highlights: [],
        photos: [
          {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Danau_Pulau_Besar_Taman_Nasional_Zamrud.jpg/1280px-Danau_Pulau_Besar_Taman_Nasional_Zamrud.jpg',
            author:
              'Balai Besar Konservasi Sumber Daya Alam Riau',
          },
          {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Danau_Pulau_Besar_Taman_Nasional_Zamrud.jpg/1280px-Danau_Pulau_Besar_Taman_Nasional_Zamrud.jpg',
            author:
              'Balai Besar Konservasi Sumber Daya Alam Riau',
          },
        ],
        photoUrls: {},
        tShirt: {
          shopPage: 'eiger-zamrud-nat-park-ss-tees',
          imgUrl:
            'https://thumbor.sirclocdn.com/unsafe/640x640/filters:format(webp)/magento.eigeradventure.com/media/catalog/product/cache/cd1064cf96e0921aa13324f8e3f8fe30/9/1/910008038.blk2.jpg',
        },
        // tumbler: {
        //   shopPage: '',
        //   imgUrl: '',
        // },
        map: 'Zamrud+National+Park/@0.6612803,102.2270523,15z/data=!3m1!4b1!4m5!3m4!1s0x31d686815bf997ab:0x80b74d3e6f2381c0!8m2!3d0.6612803!4d102.2357856',
      },
      {
        label: 'Maras',
        province: ['Kepulauan Bangka Belitung'],
        biomes: {
          gunung: 1,
          hutan: 1,
        },
        highlights: [],
        photos: [
          {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Air_Terjun_Menjang_Merah_Taman_Nasional_Gunung_Maras_%282%29_01.jpg/1280px-Air_Terjun_Menjang_Merah_Taman_Nasional_Gunung_Maras_%282%29_01.jpg',
            author: 'Roni hendrawan',
          },
          {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Green_June_Beetle_Taman_Nasional_Gunung_Maras.jpg/1280px-Green_June_Beetle_Taman_Nasional_Gunung_Maras.jpg',
            author: 'Roni hendrawan',
          },
        ],
        photoUrls: {},
        tShirt: {
          shopPage:
            'eiger-tn-gunung-maras-national-park-tees',
          imgUrl:
            'https://thumbor.sirclocdn.com/unsafe/640x640/filters:format(webp)/magento.eigeradventure.com/media/catalog/product/cache/cd1064cf96e0921aa13324f8e3f8fe30/9/1/910008016.nav2.jpg',
        },
        // tumbler: {
        //   shopPage: '',
        //   imgUrl: '',
        // },
        map: 'Taman+nasional+kawasan+bukit+maras/@-4.99935,103.5009386,7z/data=!4m10!1m2!2m1!1staman+nasional+maras!3m6!1s0x2e22e317f186efaf:0xd4bbb42f9c4d8f62!8m2!3d-1.972816!4d105.8723637!15sChR0YW1hbiBuYXNpb25hbCBtYXJhc5IBEnRvdXJpc3RfYXR0cmFjdGlvbuABAA!16s%2Fg%2F11jzx0p5f3',
      },
    ],
  },
}

// list every url to the page to a file
// download largest one by one

// { url: 'abca', dest: 'abc.jpg' },
const images: { dest: string; url: string }[] = []

for (const name in islands) {
  const island = islands[name]
  for (let i = 0; i < island.parks.length; i++) {
    const park = island.parks[i]
    // photo source stuff
    park.photos?.forEach((source: any, i: number) => {
      let segments = source.url.split('/')
      segments = segments[segments.length - 1]?.split('px-')
      source.title = segments[segments.length - 1] || ''
      source.title = source.title.split('.')[0]

      images.push({
        dest:
          park.label.toLowerCase().replace(/\s/g, '_') +
          '_' +
          i +
          '.jpg',
        url: source.url,
      })
    })
  }
}

fs.writeFileSync(
  'files/images.json',
  JSON.stringify(images, null, 2)
)

let imageUrls = ''
images.forEach((image) => (imageUrls += image.url + '\r\n'))
fs.writeFileSync('files/images.txt', imageUrls)
