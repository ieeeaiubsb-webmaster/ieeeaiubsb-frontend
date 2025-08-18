import { notFound } from "next/navigation";
import Panel from "../components/panel";
import TeamCard1 from "@/components/TeamCard1";

const excom21 = [
  {
    name: "Prof. Dr. A.B.M. Siddique Hossain",
    role: "Advisor",
    recognition: "Dean, Faculty of Engineering, AIUB",
    imageUrl: "/images/committee/siddique-sir-200x250.jpeg",
    email: "mailto:#",
    facebookUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Prof. Dr. Md. Abdur Rahman",
    role: "Advisor",
    recognition: "Associate Dean, Faculty of Engineering, AIUB",
    imageUrl: "/images/committee/rahman-sir-200x250.jpeg",
    email: "mailto:#",
    facebookUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Prof. Dr. Mohammad Abdul Mannan",
    role: "Advisor",
    recognition: "Director, Faculty of Engineering, AIUB",
    imageUrl: "/images/committee/abdulMannanSir.jpeg",
    email: "mailto:#",
    facebookUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Nafiz Ahmed Chisty",
    role: "Advisor",
    recognition: "Head-In-Charge(EEE), Faculty of Engineering, AIUB",
    imageUrl: "/images/committee/Nafiz-Ahmed-Chishty-400x489.jpeg",
    email: "mailto:#",
    facebookUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Md. Saniat Rahman Zishan",
    role: "Advisor",
    recognition: "Head of CoE Department, Faculty of Engineering, AIUB",
    imageUrl: "/images/committee/zisan-sir-200x250.jpeg",
    email: "mailto:#",
    facebookUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Chowdhury Akram Hossain",
    role: "Advisor",
    recognition: "Senior Assistant Professor, Special Assistant [OSA]",
    imageUrl: "/images/committee/akram-sir.png",
    email: "mailto:#",
    facebookUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Dr. Mohammad Hasan Imam",
    role: "Counselor",
    recognition: "Sr. Assistant Professor, Faculty of Engineering, AIUB",
    imageUrl: "/images/committee/HasanImamSir.jpeg",
    email: "mailto:#",
    facebookUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Kawshik Shikder",
    role: "Motivator",
    recognition: "Assistant Professor, Faculty of Engineering, AIUB",
    imageUrl: "/images/committee/kaushik-shikdar-sir.jpeg",
    email: "mailto:#",
    facebookUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Md. Yeasib Bin Hassan",
    role: "Chairperson",
    recognition: "B.Sc in EEE",
    imageUrl: "/images/committee/Yasib-400x600.jpeg",
    email: "mailto:B.Sc in EEE, AIUB",
    facebookUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Shartaz Khan Akash",
    role: "Vice-Chairperson",
    recognition: "B.Sc in CoE",
    imageUrl: "/images/committee/akash.jpg",
    email: "mailto:shartazkhan@ieee.org",
    facebookUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Sadman Sakib Rafat",
    role: "Secretary",
    recognition: "B.Sc in EEE",
    imageUrl: "/images/committee/rafat-200-200.jpeg",
    email: "mailto: sakibrafat82@gmail.com",
    facebookUrl: "https://www.facebook.com/sadmansakib.sadmansakib.5",
    linkedinUrl: "#",
  },
  {
    name: "Md. Zilan Uddin Saif",
    role: "Treasurer",
    recognition: "B.Sc in EEE",
    imageUrl: "/images/committee/zilan-uddin-saif-200-200.jpeg",
    email: "mailto: zilanuddin69@gmail.com",
    facebookUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Mohd. Abidur Rahman Muhit",
    role: "Outreach Program Coordinator",
    recognition: "B.Sc in EEE",
    imageUrl: "/images/committee/muhit-200.jpeg",
    email: "mailto: abidurmuhit@gmail.com",
    facebookUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Md. Touhidul Islam",
    role: "Creative Team Lead",
    recognition: "B.Sc in EEE",
    imageUrl: "/images/committee/touhidul-200.jpeg",
    email: "mailto:tohidraihan4343@gmail.com",
    facebookUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Akib Chowdhury",
    role: "Event Coordinator",
    recognition: "B.Sc in EEE",
    imageUrl: "/images/committee/Akib_Chowdhury_400_500.jpeg",
    email: "mailto:akibchowdhury@ieee.org",
    facebookUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Sayeed Al-Sahab",
    role: "Graphics Coordinator",
    recognition: "B.Sc in EEE",
    imageUrl: "/images/committee/asif_ahmed-1.jpeg",
    email: "mailto:alsahabsayeed@gmail.com",
    facebookUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Md. Shahriar Shazzad Shawon",
    role: "Logistic Coordinator",
    recognition: "B.Sc in EEE",
    imageUrl: "/images/committee/sazzad_400_500.jpeg",
    email: "mailto:Shahriar_sazzad@ieee.org",
    facebookUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Mohammad Sayem Chowdhury",
    role: "Webmaster",
    recognition: "B.Sc in CSE",
    imageUrl: "/images/committee/sayem_400_500.jpeg",
    email: "mailto:m.sayem.c@ieee.org",
    facebookUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Fahmida Akter Nova",
    role: "Publication Coordinator",
    recognition: "B.Sc in CSE",
    imageUrl: "/images/committee/Nova_400_500.jpeg",
    email: "mailto:novafahmida@gmail.com",
    facebookUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Md Barkat Ullah Tusher",
    role: "Photojournalist",
    recognition: "B.Sc in EEE",
    imageUrl: "/images/committee/tusher_400_500.jpeg",
    email: "mailto:tushera25@gmail.com",
    facebookUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Md. Jamil Istiaq",
    role: "Chairperson (CS)",
    recognition: "Chairperson (CS)",
    imageUrl: "/images/committee/jamil-istiaque-200.jpeg",
    email: "mailto:jamilistiaq@gmail.com",
    facebookUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Tanjum Naeem Kongkon",
    role: "Chairperson (WIE)",
    recognition: "B.Sc in EEE",
    imageUrl: "/images/committee/Kongkon_400_500-200x250.jpeg",
    email: "mailto:tanjumnaeemkongkon45251@gmail.com",
    facebookUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Farhan Tasnim",
    role: "Chairperson (IAS)",
    recognition: "B.Sc in EEE",
    imageUrl: "/images/committee/Farhan_Tasnim_400_500.jpeg",
    email: "mailto:farhantasnim1649@ieee.org",
    facebookUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Kaushik Ahmed",
    role: "Chairperson (EMBS)",
    recognition: "B.Sc in EEE",
    imageUrl: "/images/committee/kaushik_400_500.jpeg",
    email: "mailto:kaushikahmedabir24@gmail.com",
    facebookUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Shamim Hossen",
    role: "Chairperson (MTTS)",
    recognition: "B.Sc in EEE",
    imageUrl: "/images/committee/shamim_400_500.jpeg",
    email: "mailto:sh552388@gmail.com",
    facebookUrl: "#",
    linkedinUrl: "#",
  },
];

const excom22 = [
  {
    name: "Dr. Mohammad Hasan Imam",
    role: "Counselor",
    recognition: `Counselor, IEEE AIUB Student Branch
    Advisor, IEEE EMBS AIUB SB Chapter
    Associate Professor, Faculty of Engineering, AIUB`,
    imageUrl: "/images/committee/HasanImamSir.jpeg",
    email: "mailto:#",
    facebookUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Sarowar Hossain",
    role: "Chairperson",
    recognition: "BSc. in EEE",
    imageUrl: "/images/committee/Sarowar-Hossain-400-500.jpeg",
    email: "mailto:parvej.sarowar@ieee.org",
    facebookUrl: "https://www.facebook.com/sarowar.hossain19",
    linkedinUrl: "https://www.linkedin.com/in/sarowar-hossain-49a60a1a4/",
  },
  {
    name: "Khandoker Mainul Islam",
    role: "Vice-Chairperson (Activity)",
    recognition: "BSc. in EEE",
    imageUrl: "/images/committee/rsz_21khandoker_mainul_islam.jpeg",
    email: "mailto:imainul941@ieee.org",
    facebookUrl: "https://www.facebook.com/profile.php?id=100006608590871",
    linkedinUrl:
      "https://www.linkedin.com/in/khandoker-mainul-islam-8103a5215/",
  },
  {
    name: "Golam Masrur Chowdhury",
    role: "Vice-Chairperson (Technical)",
    recognition: "BSc. in EEE",
    imageUrl: "/images/committee/Masrur_Chowdhury__450x600-400x533.jpeg",
    email: "mailto:masrur_chowdhury@ieee.org",
    facebookUrl: "https://www.facebook.com/utsho.chowdhury.90",
    linkedinUrl:
      "https://www.linkedin.com/in/golam-masrur-chowdhury-2202221b8/",
  },
  {
    name: "Md. Sums Dip Sarker",
    role: "Secretary",
    recognition: "BSc. in EEE",
    imageUrl: "/images/committee/sumsdipsarker.jpg",
    email: "mailto:Sumsdip@ieee.org",
    facebookUrl: "https://www.facebook.com/sums.dip",
    linkedinUrl: "https://www.linkedin.com/in/sums-dip-sarker-84638121b",
  },
  {
    name: "Nisma Hossain",
    role: "Treasurer",
    recognition: "BSc. in CSE",
    imageUrl: "/images/committee/Nisma_Hossain_450x600.jpeg",
    email: "mailto:nisma.hossain.41982@gmail.com",
    facebookUrl: "https://www.facebook.com/anahitanisma",
    linkedinUrl: "https://www.linkedin.com/in/nisma-hossain-aa1946220/",
  },
  {
    name: "Sadia Afrin",
    role: "Chairperson (WIE)",
    recognition: "BSc. in CSE",
    imageUrl: "/images/committee/Sadia_Afrin_450x600.jpeg",
    email: "mailto:afrin_sadia@ieee.org",
    facebookUrl: "https://www.facebook.com/AfrinSadia07/",
    linkedinUrl: "https://www.linkedin.com/in/sadiaafrin78/",
  },
  {
    name: "Tousif Sadeque Chowdhury",
    role: "Creative Team Lead",
    recognition: "Bsc. in CSE",
    imageUrl: "/images/committee/Tousif-200x200.png",
    email: "mailto:tousifchowdhurybd@gmail.com",
    facebookUrl: "https://www.facebook.com/profile.php?id=100008366193890",
    linkedinUrl: "https://www.linkedin.com/in/tousif-chowdhury-b6ab471b0/",
  },
  {
    name: "Al Shahriar Zishan",
    role: "Photojournalist",
    recognition: "BSc. in EEE",
    imageUrl: "/images/committee/shahriar_zisan_450x600-400x533.jpeg",
    email: "mailto:shahriar.zishanziss@gmail.com",
    facebookUrl: "https://www.facebook.com/profile.php?id=100010736582706",
    linkedinUrl: "https://www.linkedin.com/in/shahriar-zishan-9ab927221/",
  },
];

const excom23 = [
  {
    name: "DR. Shameem Ahmad",
    role: "Counselor",
    recognition: "Assistant Professor, Faculty of Engineering, AIUB",
    imageUrl: "/images/committee/shameem sir.jpg",
    email: "#",
    facebookUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Khandoker Mainul Islam",
    role: "Chairperson",
    recognition: "BSc. in EEE",
    imageUrl: "/images/committee/rsz_21khandoker_mainul_islam.jpeg",
    email: "mailto:imainul941@ieee.org",
    facebookUrl: "https://www.facebook.com/profile.php?id=100006608590871",
    linkedinUrl:
      "https://www.linkedin.com/in/khandoker-mainul-islam-8103a5215/",
  },
  {
    name: "Md. Sums Dip Sarker",
    role: "Vice-Chairperson (Activity)",
    recognition: "BSc. in EEE",
    imageUrl: "/images/committee/sumsdipsarker.jpg",
    email: "mailto:Sumsdip@ieee.org",
    facebookUrl: "https://www.facebook.com/sums.dip",
    linkedinUrl: "https://www.linkedin.com/in/sums-dip-sarker-84638121b",
  },
  {
    name: "Tayefur Rahman",
    role: "Vice-Chairperson (Technical)",
    recognition: "BSc. in EEE",
    imageUrl: "/images/committee/Tayefur-Rahman-400x600.jpeg",
    email: "mailto:rahmantayefur@ieee.org",
    facebookUrl: "https://www.facebook.com/moronic.creature",
    linkedinUrl: "#",
  },
  {
    name: "Al Shahriar Zishan",
    role: "Secretary",
    recognition: "BSc. in EEE",
    imageUrl: "/images/committee/shahriar_zisan_450x600-400x533.jpeg",
    email: "mailto:shahriar.zishanziss@gmail.com",
    facebookUrl: "https://www.facebook.com/profile.php?id=100010736582706",
    linkedinUrl: "https://www.linkedin.com/in/shahriar-zishan-9ab927221/",
  },
  {
    name: "Md Kamrul Hasan",
    role: "Treasurer",
    recognition: "BSc. in EEE",
    imageUrl: "/images/committee/MD-Kamrul-Hasan-400x600.jpeg",
    email: "mailto:kamrul.hasan@ieee.org",
    facebookUrl: "https://www.facebook.com/profile.php?id=100007567124412",
    linkedinUrl: "https://www.linkedin.com/in/kamrulhasan72/",
  },
  {
    name: "Fahim Haider",
    role: "Webmaster",
    recognition: "BSc. in CSE",
    email: "mailto:fhmhaider19@gmail.com",
    imageUrl: "/images/committee/Fahim-Haider-400x600.jpeg",
    facebookUrl: "https://www.facebook.com/wolf.eye.19",
    linkedinUrl: "https://www.linkedin.com/in/fahimhaider19/",
  },
  {
    name: "Md.Tamzid Hasan",
    role: "Creative Team Lead",
    recognition: "BSc. in EEE",
    imageUrl: "/images/committee/MD.-TAMZID-HASAN-400x600.jpeg",
    email: "mailto:tamzidhasan737@gmail.com",
    facebookUrl: "https://www.facebook.com/tamzid.hasan.737/",
    linkedinUrl: "https://www.linkedin.com/in/tamzid-hasan/",
  },
  {
    name: "Piash Ghosh",
    role: "Creative Team Lead",
    recognition: "BSc. in IPE",
    imageUrl: "/images/committee/Piash-Ghosh-400x600.jpeg",
    email: "mailto:ghoshpiash361@ieee.org",
    facebookUrl: "https://www.facebook.com/piashghost",
    linkedinUrl: "https://www.linkedin.com/in/piash-ghosh-288753236/",
  },
  {
    name: "Tanjil Bin Mohiuddin",
    role: "Event Coordinator",
    recognition: "BSc. in CSE",
    imageUrl: "/images/committee/tanjil400-600.jpeg",
    email: "mailto:bintanjil@ieee.org",
    facebookUrl: "https://www.facebook.com/tanjilm445",
    linkedinUrl: "https://www.linkedin.com/in/tanjil-bin-mohiuddin-103a34246/",
  },
  {
    name: "Afiat Zahan Akhi",
    role: "WIE Affinity Group Chairperson",
    recognition: "BSc. in EEE",
    imageUrl: "/images/committee/Akhi-400x533.jpg",
    email: "mailto:afiatzakhi@ieee.org",
    facebookUrl: "https://www.facebook.com/profile.php?id=100073301439012",
    linkedinUrl: "https://www.linkedin.com/in/afiat-z-akhi-475b6523b/",
  },
  {
    name: "Riajul Karim Adil",
    role: "Logistics Coordinator",
    recognition: "BSc. in EEE",
    email: "mailto:riajuladil@gmail.com",
    imageUrl: "/images/committee/Riajul karim Adil.jpg",
    facebookUrl: "https://www.facebook.com/riajulkarim.adil.5",
    linkedinUrl: "https://www.linkedin.com/in/riajul-karim-adil-033aa1223",
  },
  {
    name: "Rahiq Al-Makhtum Rahi",
    role: "Photojournalist",
    recognition: "BSc. in CSE",
    imageUrl: "/images/committee/Rahiq-Al-Makhtum-400x600.jpeg",
    email: "mailto:rahiq789@gmail.com",
    facebookUrl: "https://www.facebook.com/rahiqam",
    linkedinUrl: "https://www.linkedin.com/in/rahiq-al-makhtum-3a240422a/",
  },
  {
    name: "Riad Al Hasan",
    role: "Membership Development Coordinator",
    recognition: "BSc. in CSE",
    imageUrl: "/images/committee/Riad-Al-Hasan-400x600.jpeg",
    email: "mailto:riadalhasan@ieee.org",
    facebookUrl: "https://www.facebook.com/Riad.Al.Hasan.1065/",
    linkedinUrl: "https://www.linkedin.com/in/riad-al-hasan-89893123a/",
  },
  {
    name: "Nishat Tasnim Rakhi",
    role: "Public Relations Coordinator",
    recognition: "BSc. in EEE",
    imageUrl: "/images/committee/nishat-rakhi-200-226.jpg",
    email: "mailto:nishattasnimrakhi10@gmail.com",
    facebookUrl: "https://www.facebook.com/tasnim.rakhi.7",
    linkedinUrl: "https://www.linkedin.com/in/tasnim-rakhi-5b3363241/",
  },
  {
    name: "Mohammed Mahruf Malek",
    role: "Publication Coordinator",
    recognition: "BSc. in IPE",
    email: "mailto:marufmalek161@gmail.com",
    imageUrl: "/images/committee/Maruf Malek.jpg",
    facebookUrl: "https://www.facebook.com/profile.php?id=100008014365965",
    linkedinUrl: "https://www.linkedin.com/in/maruf-malek-158981205",
  },
];

const excom24 = [
  {
    name: "DR.Shameem Ahmed",
    email: "#",
    facebookUrl: "",
    linkedinUrl: "",
    recognition: "Assistant Professor, Faculty of Engineering, AIUB",
    role: "Counselor",
    imageUrl: "/images/committee/com24/Excom/Shameem_Sir.png",
  },
  {
    name: "Al Shahriar Zishan",
    email: "mailto:shahriar.zishan@ieee.org",
    facebookUrl: "https://www.facebook.com/profile.php?id=100010736582706",
    linkedinUrl: "https://www.linkedin.com/in/shahriar-zishan-9ab927221/",
    recognition: "BSc. in EEE",
    role: "Chairperson",
    imageUrl: "/images/committee/com24/Excom/shahriar_zishan.jpg",
  },
  {
    name: "MD.Kamrul Hasan",
    email: "mailto:kamrul.hasan@ieee.org",
    facebookUrl: "https://www.facebook.com/profile.php?id=100007567124412",
    linkedinUrl: "https://www.linkedin.com/in/kamrulhasan72/",
    recognition: "BSc. in EEE",
    role: "Vice Chairperson(Activity)",
    imageUrl: "/images/committee/com24/Excom/Kamrul_Hasan.png",
  },
  {
    name: "Riajul Karim Adil",
    email: "mailto:riajulkarim@ieee.org",
    facebookUrl: "https://www.facebook.com/riajulkarim.adil.5",
    linkedinUrl: "https://www.linkedin.com/in/riajul-karim-adil-033aa1223",
    recognition: "BSc. in EEE",
    role: "Secretary",
    imageUrl: "/images/committee/com24/Excom/Riajul_Karim_Adil.png",
  },
  {
    name: "Nahian Ibn Amin",
    email: "mailto:Nahian@ieee.org",
    facebookUrl: "https://www.facebook.com/profile.php?id=100012872718898",
    linkedinUrl: "https://www.facebook.com/profile.php?id=100012872718898",
    recognition: "BSc. in EEE",
    role: "Treasurer",
    imageUrl: "/images/committee/com24/Excom/Nahian_Amin.jpg",
  },
  {
    name: "Ahnaf Ibtahaz",
    email: "mailto:ahnaf_17@ieee.org",
    facebookUrl: "https://www.facebook.com/ahnaf.ibtahaz.9",
    linkedinUrl: "https://www.linkedin.com/in/ahnaf-ibtahaz-47793b285/",
    recognition: "BSc. in CSE",
    role: "Event Coordinator",
    imageUrl: "/images/committee/com24/Excom/Ahnaf.jpg",
  },
  {
    name: "Mohaimenul Haque Mohan",
    email: "mailto:mhmohan@ieee.org",
    facebookUrl: "https://www.facebook.com/mhMohan19",
    linkedinUrl: "https://www.linkedin.com/in/mhmohan20/",
    recognition: "BSc. in CSE",
    role: "Event Coordinator",
    imageUrl: "/images/committee/mohan.jpg",
  },
  {
    name: "Sameen Khan",
    email: "mailto:sameen_khan@ieee.org",
    facebookUrl: "https://www.facebook.com/sameen.khan20",
    linkedinUrl: "https://www.linkedin.com/in/sameen-khan-b56997267",
    recognition: "BSc. in EEE",
    role: "Publication Coordinator",
    imageUrl: "/images/committee/sameen.jpg",
  },
  {
    name: "Abdullah Al Faisal",
    email: "mailto:abdullahalfaisal@ieee.org",
    facebookUrl: "https://www.facebook.com/abdullahal.faisal.7737",
    linkedinUrl: "https://www.linkedin.com/in/abdullah-al-faisal-a57945279/",
    recognition: "BSc. in CSE",
    role: "Creative Team Lead",
    imageUrl: "/images/committee/com24/Excom/Abdullah_Al_Faisal.jpg",
  },
  {
    name: "Shifat Arman",
    email: "mailto:shifatshiam@ieee.org",
    facebookUrl: "https://www.facebook.com/shifatarman.shiam",
    linkedinUrl: "https://www.linkedin.com/in/shifat-arman-629880252/",
    recognition: "BSc. in CSE",
    role: "Webmaster",
    imageUrl: "/images/committee/com24/Excom/Shifat_arman.png",
  },
  {
    name: "Riyaduzzaman Bhuyan",
    email: "mailto:mdriyaduzzaman@ieee.org",
    facebookUrl: "https://www.facebook.com/pres.bhuiyan.riad.3.1",
    linkedinUrl:
      "https://www.linkedin.com/in/md-riyaduzzaman-bhuiyan-b047b4216",
    recognition: "BSc. in IPE",
    role: "Logistic Coordinator",
    imageUrl: "/images/committee/riyadduzzaman.png",
  },
  {
    name: "Sanour Islam",
    email: "mailto:sanour@ieee.org",
    facebookUrl: "https://www.facebook.com/saroar.sabbir.39",
    linkedinUrl: "https://www.linkedin.com/in/saroar-hosen-8048b9249",
    recognition: "BSc. in EEE",
    role: "Logistic Coordinator",
    imageUrl: "/images/committee/com24/Excom/sanour.jpg",
  },
  {
    name: "Shafayet Ullah Ador",
    email: "mailto:shafayetullah@ieee.org",
    facebookUrl: "https://www.facebook.com/shefayet.ador",
    linkedinUrl: "https://www.linkedin.com/mwlite/in/shafayet-ullah-9009a0267",
    recognition: "BSc. in EEE",
    role: "Photojournalist",
    imageUrl: "/images/committee/com24/Excom/Shafayet_Ador.png",
  },
  {
    name: "Nawshin Anjum Prima",
    email: "mailto:naprima@ieee.org",
    facebookUrl: "https://www.facebook.com/nawshin.prima.35",
    linkedinUrl: "https://www.linkedin.com/in/na-prima-0baba0267",
    recognition: "BSc. in CSE",
    role: "Public Relation Coordinator",
    imageUrl: "/images/committee/com24/Excom/Nowshin_Prima.jpg",
  },
  {
    name: "Abdul Ahad Bin Younus",
    email: "mailto:a.ahad@ieee.org",
    facebookUrl: "https://www.facebook.com/abdulahad.apu",
    linkedinUrl: "https://www.linkedin.com/in/abdul-ahad-bin-younus-92344b250",
    recognition: "BSc. in EEE",
    role: "Public Relation Coordinator",
    imageUrl: "/images/committee/com24/Excom/Abdul_Ahad_Apu.png",
  },
  {
    name: "Nowrin Binte Rashid Rio",
    email: "mailto:nowrin_binte_rashid_rio@ieee.org",
    facebookUrl: "https://www.facebook.com/NowrinRio",
    linkedinUrl: "http://linkedin.com/in/nowrin-rashid-rio-775953269",
    recognition: "BSc. in CSE",
    role: "Membership Development Coordinator",
    imageUrl: "/images/committee/com24/Excom/Nowrin_Rashid_Rio.jpeg",
  },
];

const vol21 = [
  {
    name: "Asif-Ul Arefin",
    role: "volunteer",
    recognition: "Bsc. in EEE",
    imageUrl: "/images/committee/Asif-300x300.jpeg",
    email: "mailto:arnobarefin707@ieee.org",
    facebookUrl: "https://www.facebook.com/arefin0arnobxD",
    linkedinUrl: "#",
  },

  {
    name: "Anika Islam",
    role: "volunteer",
    recognition: "Bsc. in EEE",
    imageUrl: "/images/committee/anika.jpg",
    email: "mailto:islamanika46@gmail.com;",
    facebookUrl: "https://www.facebook.com/anika.islam.31392410",
    linkedinUrl: "https://www.linkedin.com/in/anika-islam-9b0a38148/",
  },
  {
    name: "Sadia Afrin",
    role: "volunteer",
    recognition: "Bsc. in CSE",
    imageUrl: "/images/committee/Sadia_Afrin_450x600.jpeg",
    email: "mailto:afrin.sadia7788@gmail.com",
    facebookUrl: "https://www.facebook.com/AfrinSadia07/",
    linkedinUrl: "https://www.linkedin.com/in/sadiaafrin78/",
  },
  {
    name: "Ethika Biswas",
    role: "volunteer",
    recognition: "Bsc. in EEE",
    imageUrl: "/images/committee/Ethika-300x300.jpeg",
    email: "mailto:peeubiswas2016@gmail.com",
    facebookUrl: "https://www.facebook.com/profile.php?id=100011459474071",
    linkedinUrl: "https://www.linkedin.com/in/ethika-biswas-60423a21b/",
  },
  {
    name: "Tousif Sadeque Chowdhury",
    role: "volunteer",
    recognition: "Bsc. in CSE",
    imageUrl: "/images/committee/Tousif-200x200.png",
    email: "mailto:tousifchowdhurybd@gmail.com",
    facebookUrl: "https://www.facebook.com/profile.php?id=100008366193890",
    linkedinUrl: "https://www.linkedin.com/in/tousif-chowdhury-b6ab471b0/",
  },
  {
    name: "Kaushik Mehedi Mahmud",
    role: "volunteer",
    recognition: "Bsc. in CoE",
    imageUrl: "/images/committee/Kaushik-1-300x300.jpeg",
    email: "mailto:mehedimhmd@gmail.com",
    facebookUrl: "https://www.facebook.com/mehedi.mahmud.36",
    linkedinUrl: "https://www.linkedin.com/in/kaushikmahmud/",
  },
  {
    name: "Khandoker Mainul Islam",
    role: "volunteer",
    recognition: "Bsc. in EEE",
    imageUrl: "/images/committee/rsz_21khandoker_mainul_islam.jpeg",
    email: "mailto:imainul941@gmail.com",
    facebookUrl: "https://www.facebook.com/profile.php?id=100006608590871",
    linkedinUrl:
      "https://www.linkedin.com/in/khandoker-mainul-islam-8103a5215/",
  },
  {
    name: "Golam Masrur Chowdhury",
    role: "volunteer",
    recognition: "BSc. in EEE",
    imageUrl: "/images/committee/Masrur_Chowdhury__450x600-400x533.jpeg",
    email: "mailto:masrur_chowdhury@ieee.org",
    facebookUrl: "https://www.facebook.com/utsho.chowdhury.90",
    linkedinUrl:
      "https://www.linkedin.com/in/golam-masrur-chowdhury-2202221b8/",
  },
  {
    name: "Md. Sums Dip Sarker",
    role: "volunteer",
    recognition: "BSc. in EEE",
    imageUrl: "/images/committee/sumsdipsarker.jpg",
    email: "mailto:Sumsdip@ieee.org",
    facebookUrl: "https://www.facebook.com/sums.dip",
    linkedinUrl: "https://www.linkedin.com/in/sums-dip-sarker-84638121b",
  },
  {
    name: "Al Shahriar Zishan",
    role: "volunteer",
    recognition: "BSc. in EEE",
    imageUrl: "/images/committee/shahriar_zisan_450x600-400x533.jpeg",
    email: "mailto:shahriar.zishanziss@gmail.com",
    facebookUrl: "https://www.facebook.com/profile.php?id=100010736582706",
    linkedinUrl: "https://www.linkedin.com/in/shahriar-zishan-9ab927221/",
  },
  {
    name: "Kaushik Biswas",
    role: "volunteer",
    recognition: "Bsc. in CSE",
    imageUrl: "/images/committee/Kaushik-Biswas-300x300.jpg",
    email: "mailto:kbutsho@yahoo.com",
    facebookUrl: "https://www.facebook.com/kbutsho",
    linkedinUrl: "https://www.linkedin.com/in/kbutsho/",
  },
  {
    name: "Nisma Hossain",
    role: "volunteer",
    recognition: "BSc. in CSE",
    imageUrl: "/images/committee/Nisma_Hossain_450x600.jpeg",
    email: "mailto:nisma.hossain.41982@gmail.com",
    facebookUrl: "https://www.facebook.com/anahitanisma",
    linkedinUrl: "https://www.linkedin.com/in/nisma-hossain-aa1946220/",
  },
  {
    name: "Mowmita Islam",
    role: "volunteer",
    recognition: "Bsc. in CSE",
    imageUrl: "/images/committee/Mowmita-400x400.jpg",
    email: "mailto:mowmitarose7770@gmail.com",
    facebookUrl: "https://www.facebook.com/profile.php?id=100025260843144",
    linkedinUrl: "#",
  },
];

const vol22 = [
  {
    name: "Fahim Haider",
    role: "volunteer",
    recognition: "BSc. in CSE",
    email: "mailto:fhmhaider19@gmail.com",
    imageUrl: "/images/committee/Fahim-Haider-400x600.jpeg",
    facebookUrl: "https://www.facebook.com/wolf.eye.19",
    linkedinUrl: "https://www.linkedin.com/in/fahimhaider19/",
  },
  {
    name: "Riad Al Hasan",
    role: "volunteer",
    recognition: "BSc. in CSE",
    imageUrl: "/images/committee/Riad-Al-Hasan-400x600.jpeg",
    email: "mailto:riadalhasan@ieee.org",
    facebookUrl: "https://www.facebook.com/Riad.Al.Hasan.1065/",
    linkedinUrl: "https://www.linkedin.com/in/riad-al-hasan-89893123a/",
  },
  {
    name: "Tayefur Rahman",
    role: "volunteer",
    recognition: "BSc. in EEE",
    imageUrl: "/images/committee/Tayefur-Rahman-400x600.jpeg",
    email: "mailto:rahmantayefur@ieee.org",
    facebookUrl: "https://www.facebook.com/moronic.creature",
    linkedinUrl: "#",
  },
  {
    name: "Afiat Zahan Akhi",
    role: "volunteer",
    recognition: "BSc. in EEE",
    imageUrl: "/images/committee/Akhi-400x533.jpg",
    email: "mailto:afiatzakhi@ieee.org",
    facebookUrl: "https://www.facebook.com/profile.php?id=100073301439012",
    linkedinUrl: "https://www.linkedin.com/in/afiat-z-akhi-475b6523b/",
  },
  {
    name: "Piash Ghosh",
    role: "volunteer",
    recognition: "BSc. in IPE",
    imageUrl: "/images/committee/Piash-Ghosh-400x600.jpeg",
    email: "mailto:ghoshpiash361@ieee.org",
    facebookUrl: "https://www.facebook.com/piashghost",
    linkedinUrl: "https://www.linkedin.com/in/piash-ghosh-288753236/",
  },
  {
    name: "Md. Labibul Haque Labib",
    role: "volunteer",
    recognition: "BSc. in EEE",
    imageUrl: "/images/committee/Md.-Labibul-Haque-Labib-400x600.jpeg",
    email: "mailto:labibulhaque@ieee.org",
    facebookUrl: "https://www.facebook.com/labibul.haque.69/",
    linkedinUrl: "https://www.linkedin.com/in/md-labibul-haque-labib/",
  },
  {
    name: "Md.Tamzid Hasan",
    role: "volunteer",
    recognition: "BSc. in EEE",
    imageUrl: "/images/committee/MD.-TAMZID-HASAN-400x600.jpeg",
    email: "mailto:tamzidhasan737@gmail.com",
    facebookUrl: "https://www.facebook.com/tamzid.hasan.737/",
    linkedinUrl: "https://www.linkedin.com/in/tamzid-hasan/",
  },
  {
    name: "Nishat Tasnim Rakhi",
    role: "volunteer",
    recognition: "BSc. in EEE",
    imageUrl: "/images/committee/nishat-rakhi-200-226.jpg",
    email: "mailto:nishattasnimrakhi10@gmail.com",
    facebookUrl: "https://www.facebook.com/tasnim.rakhi.7",
    linkedinUrl: "https://www.linkedin.com/in/tasnim-rakhi-5b3363241/",
  },
  {
    name: "Tanjil Bin Mohiuddin",
    role: "volunteer",
    recognition: "BSc. in CSE",
    imageUrl: "/images/committee/tanjil400-600.jpeg",
    email: "mailto:bintanjil@ieee.org",
    facebookUrl: "https://www.facebook.com/tanjilm445",
    linkedinUrl: "https://www.linkedin.com/in/tanjil-bin-mohiuddin-103a34246/",
  },
  {
    name: "Md Kamrul Hasan",
    role: "volunteer",
    recognition: "BSc. in EEE",
    imageUrl: "/images/committee/MD-Kamrul-Hasan-400x600.jpeg",
    email: "mailto:kamrul.hasan@ieee.org",
    facebookUrl: "https://www.facebook.com/profile.php?id=100007567124412",
    linkedinUrl: "https://www.linkedin.com/in/kamrulhasan72/",
  },
  {
    name: "Rahiq Al-Makhtum Rahi",
    role: "volunteer",
    recognition: "BSc. in CSE",
    imageUrl: "/images/committee/Rahiq-Al-Makhtum-400x600.jpeg",
    email: "mailto:rahiq789@gmail.com",
    facebookUrl: "https://www.facebook.com/rahiqam",
    linkedinUrl: "https://www.linkedin.com/in/rahiq-al-makhtum-3a240422a/",
  },
  {
    name: "Md Tanvir Rahman",
    role: "volunteer",
    recognition: "BSc. in EEE",
    email: "mailto:tr270314@gmail.com",
    imageUrl: "/images/committee/tanvir-400-400.jpeg",
    facebookUrl: "https://www.facebook.com/profile.php?id=100020981558959",
    linkedinUrl: "https://www.linkedin.com/in/tanvir-rahman-96a98623a/",
  },
  {
    name: "Airin Akter",
    role: "volunteer",
    recognition: "BSc. in EEE",
    imageUrl: "/images/committee/Airin-Akter-400x600.jpeg",
    email: "mailto:bagumasma142@gmail.com",
    facebookUrl: "https://www.facebook.com/nurjahan.airin.9",
    linkedinUrl: "https://www.linkedin.com/in/airin-akter-537243247/",
  },
];

const vol23 = [
  // {
  //   name: "Swapnil Paul",
  //   role: "volunteer",
  //   recognition: "BSc. in CSE",
  //   email: "mailto:spniloync@gmail.com",
  //   imageUrl: "/images/committee/swapnil.jpg",
  //   facebookUrl: "https://www.facebook.com/swapnilpaul.niloy/",
  //   linkedinUrl: "#",
  // },
  {
    name: "Md Sohag Islam",
    role: "volunteer",
    recognition: "BSc. in CSE",
    email: "mailto:mdsohagislam25@gmail.com",
    imageUrl: "/images/committee/Sohag Srz.jfif",
    facebookUrl: "https://www.facebook.com/sohagsrz",
    linkedinUrl: "https://www.linkedin.com/in/sohagsrz",
  },
  {
    name: "SHIFAT ARMAN SHIAM",
    role: "volunteer",
    recognition: "BSc. in CSE",
    email: "mailto:mailto:shifatshiam@gmail.com",
    imageUrl: "/images/committee/com24/Excom/Shifat_arman.png",
    facebookUrl: "https://www.facebook.com/shifatarman.shiam",
    linkedinUrl: "https://www.linkedin.com/in/shifat-arman-629880252/",
  },
  {
    name: "Mantasa Afrin Shinjon",
    role: "volunteer",
    recognition: "BSc. in CSE",
    email: "mailto:shinjonmantasaafrin@gmail.com",
    imageUrl: "/images/committee/Mantasa Afrin Shinjon.jpg",
    facebookUrl: "https://www.facebook.com/mantasaafrin.shinjon.9",
    linkedinUrl: "https://www.linkedin.com/in/mantasa-afrin-shinjon-553555277/",
  },
  {
    name: "Nawshin Anjum Prima",
    role: "volunteer",
    recognition: "BSc. in CSE",
    email: "mailto:Nawshin Anjum Prima",
    imageUrl: "/images/committee/Nawshin Prima.jpg",
    facebookUrl: "https://www.facebook.com/nawshin.prima.35",
    linkedinUrl: "https://www.linkedin.com/in/na-prima-0baba0267",
  },
  {
    name: "Nazifa Maimuna",
    role: "volunteer",
    recognition: "BSc. in IPE",
    email: "mailto:nazifamaimuna43@gmail.com",
    imageUrl: "/images/committee/nazifa.jpg",
    facebookUrl: "https://www.facebook.com/profile.php?id=100028680131418",
    linkedinUrl: "https://www.linkedin.com/in/nazifa-maimuna-44005b268",
  },
  {
    name: "Mohammed Mahruf Malek",
    role: "volunteer",
    recognition: "BSc. in IPE",
    email: "mailto:marufmalek161@gmail.com",
    imageUrl: "/images/committee/Maruf Malek.jpg",
    facebookUrl: "https://www.facebook.com/profile.php?id=100008014365965",
    linkedinUrl: "https://www.linkedin.com/in/maruf-malek-158981205",
  },
  {
    name: "Sameen Khan",
    role: "volunteer",
    recognition: "BSc. in EEE",
    email: "mailto:sameen1820@gmail.com",
    imageUrl: "/images/committee/sameen.jpg",
    facebookUrl: "https://www.facebook.com/sameen.khan20",
    linkedinUrl: "https://www.linkedin.com/in/sameen-khan-b56997267",
  },
  {
    name: "Mohammad Jakwat Ul Ahsan",
    role: "volunteer",
    recognition: "BSc. in EEE",
    email: "mailto:aurittroahsan@gmail.com",
    imageUrl: "/images/committee/jakwat.jpg",
    facebookUrl: "https://www.facebook.com/profile.php?id=100004793316516",
    linkedinUrl: "https://www.linkedin.com/in/aurittro-ahsan-9459051ab",
  },
  {
    name: "Nahian Ibn Amin",
    role: "volunteer",
    recognition: "BSc. in EEE",
    email: "mailto:aminnahianibn@gmail.com",
    imageUrl: "/images/committee/nahian amin.jpg",
    facebookUrl: "https://www.facebook.com/profile.php?id=100012872718898",
    linkedinUrl: "https://www.linkedin.com/in/nahian-ibn-amin-9a3988267",
  },
  {
    name: "Shafayet Ullah",
    role: "volunteer",
    recognition: "BSc. in EEE",
    email: "mailto:#",
    imageUrl: "/images/committee/shefayet.jpg",
    facebookUrl: "https://www.facebook.com/shefayet.ador",
    linkedinUrl: "https://www.linkedin.com/mwlite/in/shafayet-ullah-9009a0267",
  },
  {
    name: "Md Fahim Abdullah",
    role: "volunteer",
    recognition: "BSc. in CSE",
    email: "mailto:mojumderfahim26@gmail.com",
    imageUrl: "/images/committee/Fahim Mojumder.jpeg",
    facebookUrl: "https://www.facebook.com/FahimMojumder1234",
    linkedinUrl: "https://www.linkedin.com/in/fahim-mojumder-41a9b2285",
  },
  {
    name: "MD.Ahnaf Ibtahaz",
    role: "volunteer",
    recognition: "BSc. in CSE",
    email: "mailto:ahnaf.ibtahaz.17@gmail.com",
    imageUrl: "/images/committee/ahnaf.jpg",
    facebookUrl: "https://www.facebook.com/ahnaf.ibtahaz.9",
    linkedinUrl: "https://www.linkedin.com/in/ahnaf-ibtahaz-47793b285/",
  },
  {
    name: "Nowrin Binte Rashid Rio",
    role: "volunteer",
    recognition: "BSc. in CSE",
    email: "mailto:nowrinrashid004@gmail.com",
    imageUrl: "/images/committee/Nowrin Rashid Rio.jpeg",
    facebookUrl: "https://www.facebook.com/NowrinRio",
    linkedinUrl: "http://linkedin.com/in/nowrin-rashid-rio-775953269",
  },
  {
    name: "Mohaimenul Haque",
    role: "volunteer",
    recognition: "BSc. in CSE",
    email: "mailto:mhmohan19@gmail.com",
    imageUrl: "/images/committee/mohan.jpg",
    facebookUrl: "https://www.facebook.com/mhMohan19",
    linkedinUrl: "#",
  },
  {
    name: "MD TANZIL RAYHAN ",
    role: "volunteer",
    recognition: "BSc. in CSE",
    email: "mailto:tanzilrayhan@ieee.org",
    imageUrl: "/images/committee/TANZIL RAYHAN.jpeg",
    facebookUrl: "https://www.facebook.com/tanzilrayhan2001",
    linkedinUrl: "https://www.linkedin.com/in/tanzilrayhan/",
  },
  {
    name: "Musanna Tarique",
    role: "volunteer",
    recognition: "BSc. in EEE",
    email: "mailto:musannatarique@gmail.com",
    imageUrl: "/images/committee/Musanna Tarique.jpg",
    facebookUrl: "https://www.facebook.com/musannatarique",
    linkedinUrl: "https://www.linkedin.com/in/musanna-tarique/",
  },
  {
    name: "Riajul Karim Adil",
    role: "volunteer",
    recognition: "BSc. in EEE",
    email: "mailto:riajuladil@gmail.com",
    imageUrl: "/images/committee/Riajul karim Adil.jpg",
    facebookUrl: "https://www.facebook.com/riajulkarim.adil.5",
    linkedinUrl: "https://www.linkedin.com/in/riajul-karim-adil-033aa1223",
  },
  {
    name: "Mehrab Islam Omi",
    role: "volunteer",
    recognition: "BSc. in EEE",
    email: "mailto:pdark798@gmail.com ",
    imageUrl: "/images/committee/Mehrab Omi.jpeg",
    facebookUrl: "https://www.facebook.com/mehrabislam.omi",
    linkedinUrl: "https://www.linkedin.com/in/mehrab-omi-153634198",
  },
  {
    name: "Md.Riyaduzzaman Bhuiyan",
    role: "volunteer",
    recognition: "BSc. in IPE",
    email: "mailto:mdriyaduzzaman@ieee.org",
    imageUrl: "/images/committee/riyadduzzaman.png",
    facebookUrl: "https://www.facebook.com/pres.bhuiyan.riad.3.1",
    linkedinUrl:
      "https://www.linkedin.com/in/md-riyaduzzaman-bhuiyan-b047b4216",
  },
  {
    name: "Sanour Islam",
    role: "volunteer",
    recognition: "BSc. in EEE",
    email: "mailto:sanourislam3@gmail.com",
    imageUrl: "/images/committee/sanour.jpg",
    facebookUrl: "https://www.facebook.com/sanour3.14159",
    linkedinUrl: "http://www.linkedin.com/in/sanour-islam-449062228",
  },
  {
    name: "Saroar Hosen",
    role: "volunteer",
    recognition: "BSc. in EEE",
    email: "mailto:sabbirsaroar97@gmail.com",
    imageUrl: "/images/committee/saroar sabbir.jpeg",
    facebookUrl: "https://www.facebook.com/saroar.sabbir.39",
    linkedinUrl: "https://www.linkedin.com/in/saroar-hosen-8048b9249",
  },
  {
    name: "Sobhan Ibne Hasan",
    role: "volunteer",
    recognition: "BSc. in CSE",
    email: "mailto:sobhan.hasan56@gmail.com",
    imageUrl: "/images/committee/Sobhan Hasan.jpeg",
    facebookUrl: "https://www.facebook.com/profile.php?",
    linkedinUrl: "https://www.linkedin.com/in/sobhan-ibne-hasan-96475823a",
  },
  {
    name: "Abdul Ahad Bin Younus",
    role: "volunteer",
    recognition: "BSc. in EEE",
    email: "mailto:aa.apu2003@gmail.com",
    imageUrl: "/images/committee/abdullah ahad.jpg",
    facebookUrl: "https://www.facebook.com/abdulahad.apu",
    linkedinUrl: "https://www.linkedin.com/in/abdul-ahad-bin-younus-92344b250",
  },
  {
    name: "Abdullah Al Faisal",
    role: "volunteer",
    recognition: "BSc. in CSE",
    email: "mailto:abdullahalfaisal992@gmail.com",
    imageUrl: "/images/committee/faisal.jpg",
    facebookUrl: "https://www.facebook.com/abdullahal.faisal.7737",
    linkedinUrl: "https://www.linkedin.com/in/abdullah-al-faisal-a57945279/",
  },
];

const vol24 = [
  {
    name: "Arnob Aich Anurag",
    role: "volunteer",
    recognition: "BSc. in CSE",
    imageUrl: "/images/committee/com24/volunteers/Arnob Aich Anurag.jpg",
    email: "arnob.aich@ieee.org",
    facebookUrl: "https://www.facebook.com/share/1EBT4ccQST/",
    linkedinUrl: "https://www.linkedin.com/in/arnob-aich-643a99306/",
  },
  {
    name: "Ebrahim Hanif",
    role: "volunteer",
    recognition: "BSc. in CSE",
    imageUrl: "/images/committee/com24/volunteers/Ebrahim Hanif.jpg",
    email: "ebrahimhanif810@gmail.com",
    facebookUrl: "https://www.facebook.com/share/156HEPVqpN/",
    linkedinUrl: "https://www.linkedin.com/in/ebrahimhanif12",
  },
  {
    name: "Md. Farhan Afsar Shakib",
    role: "volunteer",
    recognition: "BSc. in IPE",
    imageUrl: "/images/committee/com24/volunteers/MD.Farhan Afsar Shakib_.jpg",
    email: "fasakib75@gmail.com",
    facebookUrl: "https://www.facebook.com/share/1Anc9vhRVC/",
    linkedinUrl: "https://www.linkedin.com/in/f-a-sakib-4545b02b5/",
  },
  {
    name: "Usha Hossain Abrar",
    role: "volunteer",
    recognition: "BSc. in EEE",
    imageUrl: "/images/committee/com24/volunteers/USHA HOSSAIN ABRAR .jpeg",
    email: "abrarushahossain222@gmail.com",
    facebookUrl: "https://www.facebook.com/share/19F9W6Mg6M/",
    linkedinUrl: "https://www.linkedin.com/in/usha-hossain-abrar-631170307/",
  },
  {
    name: "Toki Kabbo",
    role: "volunteer",
    recognition: "BSc. in COE",
    imageUrl: "/images/committee/com24/volunteers/Toki tahomid kabbo.jpeg",
    email: "kabbo885@gmail.com",
    facebookUrl: "https://www.facebook.com/share/1AxTE5AZ2A/",
    linkedinUrl: "https://www.linkedin.com/in/toki-tahomid-kabbo-07b24a317/",
  },
  {
    name: "Md. Minhajul Islam",
    role: "volunteer",
    recognition: "BSc. in EEE",
    imageUrl: "/images/committee/com24/volunteers/MD. MINHAJUL ISLAM.jpg",
    email: "mdminhajulislam71216@gmail.com",
    facebookUrl: "https://www.facebook.com/share/1BtqCrHhPN/",
    linkedinUrl: "https://www.linkedin.com/in/md-minhajul-islam-16b3101a8/",
  },
  {
    name: "Tasfia Tasnim",
    role: "volunteer",
    recognition: "BSc. in EEE",
    imageUrl: "/images/committee/com24/volunteers/Tasfia Tasnim.jpg",
    email: "ttasnimty@gmail.com",
    facebookUrl: "https://www.facebook.com/share/1B9bhXQxkf/",
    linkedinUrl: "https://www.linkedin.com/in/tasfia-tasnim-846489315/",
  },
  {
    name: "Rokeya Seraj",
    role: "volunteer",
    recognition: "BSc. in COE",
    imageUrl: "/images/committee/com24/volunteers/Rokeya Binta Seraj .png",
    email: "rokeyaseraj2209@gmail.com",
    facebookUrl: "https://www.facebook.com/share/15bHiRfjTA/",
    linkedinUrl: "https://www.linkedin.com/in/rokeya-seraj-63298a2b8/",
  },
  {
    name: "Nuren Tasnim",
    role: "volunteer",
    recognition: "BSc. in CSE",
    imageUrl: "/images/committee/com24/volunteers/Nuren Tasnim Risha.jpg",
    email: "risha3532@gmail.com",
    facebookUrl: "https://www.facebook.com/share/1BoJqgqx3t/",
    linkedinUrl: "https://www.linkedin.com/in/nuren-tasnim-ab67942b5/",
  },
  {
    name: "Aishee Debnath",
    role: "volunteer",
    recognition: "BSc. in CSE",
    imageUrl: "/images/committee/com24/volunteers/Aishee Debnath.png",
    email: "aisheedebnath86@gmail.com",
    facebookUrl: "https://www.facebook.com/share/188RLQHtNF/",
    linkedinUrl: "https://www.linkedin.com/in/aishee-debnath-14763b2b4/",
  },
  {
    name: "Md. Nahiduzzaman",
    role: "volunteer",
    recognition: "BSc. in EEE",
    imageUrl: "/images/committee/com24/volunteers/Md. Nahiduzzaman.jpg",
    email: "naimislam108105@gmail.com",
    facebookUrl: "https://www.facebook.com/share/15q4bTNVEB/",
    linkedinUrl: "#",
  },
  {
    name: "Nazmul Islam Rimon",
    role: "volunteer",
    recognition: "BSc. in EEE",
    imageUrl: "/images/committee/com24/volunteers/Nazmul Islam Rimon.jpeg",
    email: "remonakon101@gmail.com",
    facebookUrl: "https://www.facebook.com/share/1W8cChR6so/",
    linkedinUrl: "https://www.linkedin.com/in/nazmul-islam-b21021293/",
  },
  {
    name: "Md.Shihab Uddin",
    role: "volunteer",
    recognition: "BSc. in CSE",
    imageUrl: "/images/committee/com24/volunteers/Md. Shihab Uddin.jpg",
    email: "mdshihabuddin579@gmail.com",
    facebookUrl: "https://www.facebook.com/mdshihab9995?mibextid=ZbWKwL",
    linkedinUrl: "https://www.linkedin.com/in/mdshihab26/",
  },
  {
    name: "Sreekant Sutradhar",
    role: "volunteer",
    recognition: "BSc. in EEE",
    imageUrl: "/images/committee/com24/volunteers/Sreekant Sutradhar_.jpg",
    email: "sreekant_@ieee.org",
    facebookUrl: "https://www.facebook.com/share/1G2pB4BNg8/",
    linkedinUrl: "https://www.linkedin.com/in/sreekant-sutradhar-ab424a37b/",
  },
  {
    name: "Zabib Hasan",
    role: "volunteer",
    recognition: "BSc. in EEE",
    imageUrl: "/images/committee/com24/volunteers/zabib.jpg",
    email: "zabibhasanayat2004@gmail.com",
    facebookUrl: "https://www.facebook.com/share/19p8uTJqnn/",
    linkedinUrl: "https://www.linkedin.com/in/hasan-zabib-773082346/",
  },
  {
    name: "Rafith Tarafder",
    role: "volunteer",
    recognition: "BSc. in CSE",
    imageUrl: "/images/committee/com24/volunteers/Rafith Tarafder.jpg",
    email: "tarafderrafith@gmail.com",
    facebookUrl: "https://www.facebook.com/share/161En5CLFm/",
    linkedinUrl: "https://www.linkedin.com/in/rafith-tarafder-7491a72a8/",
  },
  {
    name: "Shajidur Rahman Rafi",
    role: "volunteer",
    recognition: "BSc. in EEE",
    imageUrl: "/images/committee/com24/volunteers/Shajidur Rahman Rafi .jpg",
    email: "rafi91094@gmail.com",
    facebookUrl: "https://www.facebook.com/share/15ccwbnSHP/",
    linkedinUrl: "https://www.linkedin.com/in/shajidur-rahman-rafi-7a25a0275/",
  },
  {
    name: "Md. Shadman Shakib Alam",
    role: "volunteer",
    recognition: "BSc. in EEE",
    imageUrl: "/images/committee/com24/volunteers/MD Shadman Shakib Alam.jpg",
    email: "shadmansakibalam@gmail.com",
    facebookUrl: "https://www.facebook.com/share/1DXsvfv8D8/",
    linkedinUrl: "https://www.linkedin.com/in/shadman-shakib-01a538218/",
  },
  {
    name: "Mst. Sharaf Anika Esha",
    role: "volunteer",
    recognition: "BSc. in CSE",
    imageUrl: "/images/committee/com24/volunteers/MST.SHARAF ANIKA ESHA.jpg",
    email: "sharafanikaesha4299@gmail.com",
    facebookUrl: "https://www.facebook.com /share/18fedc2J4R/",
    linkedinUrl: "https://www.linkedin.com/in/sharaf-anika-esha-988076251/",
  },
];

const wie22 = [
  {
    name: "Sadia Afrin",
    role: "Chairperson",
    recognition: "BSc. in CSE",
    imageUrl: "/images/committee/Sadia_Afrin_450x600.jpeg",
    email: "mailto:afrin_sadia@ieee.org",
    facebookUrl: "https://www.facebook.com/AfrinSadia07/",
    linkedinUrl: "https://www.linkedin.com/in/sadiaafrin78/",
  },
  {
    name: "Nisma Hossain",
    role: "Vice-Chairperson",
    recognition: "BSc. in CSE",
    imageUrl: "/images/committee/Nisma_Hossain_450x600.jpeg",
    email: "mailto:nisma.hossain.41982@gmail.com",
    facebookUrl: "https://www.facebook.com/anahitanisma",
    linkedinUrl: "https://www.linkedin.com/in/nisma-hossain-aa1946220/",
  },
  {
    name: "Afiat Zahan Akhi",
    role: "Secretary",
    recognition: "BSc. in EEE",
    imageUrl: "/images/committee/Akhi-400x533.jpg",
    email: "mailto:afiatzakhi@ieee.org",
    facebookUrl: "https://www.facebook.com/profile.php?id=100073301439012",
    linkedinUrl: "https://www.linkedin.com/in/afiat-z-akhi-475b6523b/",
  },
  {
    name: "Airin Akter",
    role: "Treasurer",
    recognition: "BSc. in EEE",
    imageUrl: "/images/committee/Airin-Akter-400x600.jpeg",
    email: "mailto:bagumasma142@gmail.com",
    facebookUrl: "https://www.facebook.com/nurjahan.airin.9",
    linkedinUrl: "https://www.linkedin.com/in/airin-akter-537243247/",
  },
];

const wie23 = [
  {
    name: "Afiat Zahan Akhi",
    role: "Affinity Group Chairperson",
    recognition: "BSc. in EEE",
    imageUrl: "/images/committee/Akhi-400x533.jpg",
    email: "mailto:afiatzakhi@ieee.org",
    facebookUrl: "https://www.facebook.com/profile.php?id=100073301439012",
    linkedinUrl: "https://www.linkedin.com/in/afiat-z-akhi-475b6523b/",
  },
  {
    name: "Nishat Tasnim Rakhi",
    role: "Affinity Group Vice-Chairperson",
    recognition: "BSc. in EEE",
    imageUrl: "/images/committee/nishat-rakhi-200-226.jpg",
    email: "mailto:nishattasnimrakhi10@gmail.com",
    facebookUrl: "https://www.facebook.com/tasnim.rakhi.7",
    linkedinUrl: "https://www.linkedin.com/in/tasnim-rakhi-5b3363241/",
  },
  {
    name: "Nazifa Maimuna",
    role: "Affinity Group Secretary",
    recognition: "BSc. in IPE",
    email: "mailto:nazifamaimuna43@gmail.com",
    imageUrl: "/images/committee/nazifa.jpg",
    facebookUrl: "https://www.facebook.com/profile.php?id=100028680131418",
    linkedinUrl: "https://www.linkedin.com/in/nazifa-maimuna-44005b268",
  },
  {
    name: "Nowrin Binte Rashid Rio",
    role: "Affinity Group Treasurer",
    recognition: "BSc. in CSE",
    email: "mailto:nowrinrashid004@gmail.com",
    imageUrl: "/images/committee/Nowrin Rashid Rio.jpeg",
    facebookUrl: "https://www.facebook.com/NowrinRio",
    linkedinUrl: "http://linkedin.com/in/nowrin-rashid-rio-775953269",
  },
];

const wie24 = [
  {
    name: "Nowrin Binte Rashid Rio",
    email: "nowrin_binte_rashid_rio@ieee.org",
    facebookUrl: "https://www.facebook.com/NowrinRio",
    linkedinUrl: "http://linkedin.com/in/nowrin-rashid-rio-775953269",
    recognition: "BSc. in CSE",
    role: "Chapter Chairperson",
    imageUrl: "/images/committee/com24/Excom/Nowrin_Rashid_Rio.jpeg",
  },
  {
    name: "Nawshin Prima",
    email: "naprima@ieee.org",
    facebookUrl: "https://www.facebook.com/nawshin.prima.35",
    linkedinUrl: "https://www.linkedin.com/in/na-prima-0baba0267",
    recognition: "BSc. in CSE",
    role: "Chapter Secretary",
    imageUrl: "/images/committee/com24/Excom/Nowshin_Prima.jpg",
  },
  {
    name: "Mantasa Afrin Shinjon",
    role: "Chapter Treasurer",
    recognition: "BSc. in CSE",
    email: "mailto:shinjonmantasaafrin@gmail.com",
    imageUrl: "/images/committee/Mantasa Afrin Shinjon.jpg",
    facebookUrl: "https://www.facebook.com/mantasaafrin.shinjon.9",
    linkedinUrl: "https://www.linkedin.com/in/mantasa-afrin-shinjon-553555277/",
  },
];

const ias22 = [
  {
    name: "Khandoker Mainul Islam",
    role: "Chairperson",
    recognition: "BSc. in EEE",
    imageUrl: "/images/committee/rsz_21khandoker_mainul_islam.jpeg",
    email: "mailto:imainul941@ieee.org",
    facebookUrl: "https://www.facebook.com/profile.php?id=100006608590871",
    linkedinUrl:
      "https://www.linkedin.com/in/khandoker-mainul-islam-8103a5215/",
  },
  {
    name: "Tanjil Bin Mohiuddin",
    role: "Secretary",
    recognition: "BSc. in CSE",
    imageUrl: "/images/committee/tanjil400-600.jpeg",
    email: "mailto:bintanjil@ieee.org",
    facebookUrl: "https://www.facebook.com/tanjilm445",
    linkedinUrl: "https://www.linkedin.com/in/tanjil-bin-mohiuddin-103a34246/",
  },
  {
    name: "Piash Ghosh",
    role: "Treasurer",
    recognition: "BSc. in IPE",
    imageUrl: "/images/committee/Piash-Ghosh-400x600.jpeg",
    email: "mailto:ghoshpiash361@ieee.org",
    facebookUrl: "https://www.facebook.com/piashghost",
    linkedinUrl: "https://www.linkedin.com/in/piash-ghosh-288753236/",
  },
];

const ias23 = [
  {
    name: "Tanjil Bin Mohiuddin",
    role: "Chapter Chairperson",
    recognition: "BSc. in CSE",
    imageUrl: "/images/committee/tanjil400-600.jpeg",
    email: "mailto:bintanjil@ieee.org",
    facebookUrl: "https://www.facebook.com/tanjilm445",
    linkedinUrl: "https://www.linkedin.com/in/tanjil-bin-mohiuddin-103a34246/",
  },
  {
    name: "Abdullah Al Faisal",
    role: "Chapter Secretary",
    recognition: "BSc. in CSE",
    email: "mailto:abdullahalfaisal992@gmail.com",
    imageUrl: "/images/committee/faisal.jpg",
    facebookUrl: "https://www.facebook.com/abdullahal.faisal.7737",
    linkedinUrl: "https://www.linkedin.com/in/abdullah-al-faisal-a57945279/",
  },
  {
    name: "Nahian Ibn Amin",
    role: "Chapter Treasurer",
    recognition: "BSc. in EEE",
    email: "mailto:aminnahianibn@gmail.com",
    imageUrl: "/images/committee/nahian amin.jpg",
    facebookUrl: "https://www.facebook.com/profile.php?id=100012872718898",
    linkedinUrl: "https://www.linkedin.com/in/nahian-ibn-amin-9a3988267",
  },
];

const ias24 = [
  {
    name: "Riyaduzzaman Bhuyan",
    email: "mdriyaduzzaman@ieee.org",
    facebookUrl: "https://www.facebook.com/pres.bhuiyan.riad.3.1",
    linkedinUrl:
      "https://www.linkedin.com/in/md-riyaduzzaman-bhuiyan-b047b4216",
    recognition: "BSc. in EEE",
    role: "Chapter Chairperson",
    imageUrl: "/images/committee/riyadduzzaman.png",
  },
  {
    name: "Ahnaf Ibtahaz",
    email: "ahnaf_17@ieee.org",
    facebookUrl: "https://www.facebook.com/ahnaf.ibtahaz.9",
    linkedinUrl: "https://www.linkedin.com/in/ahnaf-ibtahaz-47793b285/",
    recognition: "BSc. in CSE",
    role: "Chapter Secretary",
    imageUrl: "/images/committee/com24/Excom/Ahnaf.jpg",
  },
  {
    name: "Sanour Islam",
    email: "sanour@ieee.org",
    facebookUrl: "https://www.facebook.com/saroar.sabbir.39",
    linkedinUrl: "https://www.linkedin.com/in/saroar-hosen-8048b9249",
    recognition: "BSc. in EEE",
    role: "Chapter Treasurer",
    imageUrl: "/images/committee/com24/Excom/sanour.jpg",
  },
];

const mtts22 = [
  {
    name: "Golam Masrur Chowdhury",
    role: "Chairperson",
    recognition: "BSc. in EEE",
    imageUrl: "/images/committee/Masrur_Chowdhury__450x600-400x533.jpeg",
    email: "mailto:masrur_chowdhury@ieee.org",
    facebookUrl: "https://www.facebook.com/utsho.chowdhury.90",
    linkedinUrl:
      "https://www.linkedin.com/in/golam-masrur-chowdhury-2202221b8/",
  },
  {
    name: "Md. Labibul Haque Labib",
    role: "Secretary",
    recognition: "BSc. in EEE",
    imageUrl: "/images/committee/Md.-Labibul-Haque-Labib-400x600.jpeg",
    email: "mailto:labibulhaque@ieee.org",
    facebookUrl: "https://www.facebook.com/labibul.haque.69/",
    linkedinUrl: "https://www.linkedin.com/in/md-labibul-haque-labib/",
  },
  {
    name: "Rahiq Al-Makhtum Rahi",
    role: "Treasurer",
    recognition: "BSc. in CSE",
    imageUrl: "/images/committee/Rahiq-Al-Makhtum-400x600.jpeg",
    email: "mailto:rahiq789@gmail.com",
    facebookUrl: "https://www.facebook.com/rahiqam",
    linkedinUrl: "https://www.linkedin.com/in/rahiq-al-makhtum-3a240422a/",
  },
];

const mtts23 = [
  {
    name: "Piash Ghosh",
    role: "Chapter Chairperson",
    recognition: "BSc. in IPE",
    imageUrl: "/images/committee/Piash-Ghosh-400x600.jpeg",
    email: "mailto:ghoshpiash361@ieee.org",
    facebookUrl: "https://www.facebook.com/piashghost",
    linkedinUrl: "https://www.linkedin.com/in/piash-ghosh-288753236/",
  },
  {
    name: "Rahiq Al-Makhtum Rahi",
    role: "Chapter Secretary",
    recognition: "BSc. in CSE",
    imageUrl: "/images/committee/Rahiq-Al-Makhtum-400x600.jpeg",
    email: "mailto:rahiq789@gmail.com",
    facebookUrl: "https://www.facebook.com/rahiqam",
    linkedinUrl: "https://www.linkedin.com/in/rahiq-al-makhtum-3a240422a/",
  },
  {
    name: "Musanna Tarique",
    role: "Chapter Treasurer",
    recognition: "BSc. in EEE",
    email: "mailto:musannatarique@gmail.com",
    imageUrl: "/images/committee/Musanna Tarique.jpg",
    facebookUrl: "https://www.facebook.com/musannatarique",
    linkedinUrl: "https://www.linkedin.com/in/musanna-tarique/",
  },
];

const mtts24 = [
  {
    name: "Abdullah Al Faisal",
    role: "Chapter Chairperson",
    recognition: "BSc. in CSE",
    email: "mailto:abdullahalfaisal992@gmail.com",
    imageUrl: "/images/committee/faisal.jpg",
    facebookUrl: "https://www.facebook.com/abdullahal.faisal.7737",
    linkedinUrl: "https://www.linkedin.com/in/abdullah-al-faisal-a57945279/",
  },
  {
    name: "Md Fahim Abdullah",
    role: "Chapter Secretary",
    recognition: "BSc. in CSE",
    email: "mailto:mojumderfahim26@gmail.com",
    imageUrl: "/images/committee/Fahim Mojumder.jpeg",
    facebookUrl: "https://www.facebook.com/FahimMojumder1234",
    linkedinUrl: "https://www.linkedin.com/in/fahim-mojumder-41a9b2285",
  },
  {
    name: "Mohaimenul Haque Mohan",
    email: "mhmohan@ieee.org",
    facebookUrl: "https://www.facebook.com/mhMohan19",
    linkedinUrl: "https://www.linkedin.com/in/mhmohan20/",
    recognition: "BSc. in CSE",
    role: "Chapter Treasurer",
    imageUrl: "/images/committee/mohan.jpg",
  },
];

const embs22 = [
  {
    name: "Al Shahriar Zishan",
    role: "Chairperson",
    recognition: "BSc. in EEE",
    imageUrl: "/images/committee/shahriar_zisan_450x600-400x533.jpeg",
    email: "mailto:shahriar.zishanziss@gmail.com",
    facebookUrl: "https://www.facebook.com/profile.php?id=100010736582706",
    linkedinUrl: "https://www.linkedin.com/in/shahriar-zishan-9ab927221/",
  },
  {
    name: "Md Kamrul Hasan",
    role: "Secretary",
    recognition: "BSc. in EEE",
    imageUrl: "/images/committee/MD-Kamrul-Hasan-400x600.jpeg",
    email: "mailto:kamrul.hasan@ieee.org",
    facebookUrl: "https://www.facebook.com/profile.php?id=100007567124412",
    linkedinUrl: "https://www.linkedin.com/in/kamrulhasan72/",
  },
  {
    name: "Tayefur Rahman",
    role: "Treasurer",
    recognition: "BSc. in EEE",
    imageUrl: "/images/committee/Tayefur-Rahman-400x600.jpeg",
    email: "mailto:rahmantayefur@ieee.org",
    facebookUrl: "https://www.facebook.com/moronic.creature",
    linkedinUrl: "#",
  },
];

const embs23 = [
  {
    name: "Tayefur Rahman",
    role: "Chapter Chairperson",
    recognition: "BSc. in EEE",
    imageUrl: "/images/committee/Tayefur-Rahman-400x600.jpeg",
    email: "mailto:rahmantayefur@ieee.org",
    facebookUrl: "https://www.facebook.com/moronic.creature",
    linkedinUrl: "#",
  },
  {
    name: "Md Kamrul Hasan",
    role: "Chapter Vice Chairperson",
    recognition: "BSc. in EEE",
    imageUrl: "/images/committee/MD-Kamrul-Hasan-400x600.jpeg",
    email: "mailto:kamrul.hasan@ieee.org",
    facebookUrl: "https://www.facebook.com/profile.php?id=100007567124412",
    linkedinUrl: "https://www.linkedin.com/in/kamrulhasan72/",
  },
  {
    name: "MD TANZIL RAYHAN ",
    role: "Chapter Secretary",
    recognition: "BSc. in CSE",
    email: "mailto:tanzilrayhan@ieee.org",
    imageUrl: "/images/committee/TANZIL RAYHAN.jpeg",
    facebookUrl: "https://www.facebook.com/tanzilrayhan2001",
    linkedinUrl: "https://www.linkedin.com/in/tanzilrayhan/",
  },
  {
    name: "MD.Ahnaf Ibtahaz",
    role: "Chapter Treasurer",
    recognition: "BSc. in CSE",
    email: "mailto:ahnaf.ibtahaz.17@gmail.com",
    imageUrl: "/images/committee/ahnaf.jpg",
    facebookUrl: "https://www.facebook.com/ahnaf.ibtahaz.9",
    linkedinUrl: "https://www.linkedin.com/in/ahnaf-ibtahaz-47793b285/",
  },
];

const embs24 = [
  {
    name: "Nahian Ibn Amin",
    email: "Nahian@ieee.org",
    facebookUrl: "https://www.facebook.com/profile.php?id=100012872718898",
    linkedinUrl: "https://www.facebook.com/profile.php?id=100012872718898",
    recognition: "BSc. in EEE",
    role: "Treasurer",
    imageUrl: "/images/committee/com24/Excom/Nahian_Amin.jpg",
  },
  {
    name: "Md Sohag Islam",
    role: "volunteer",
    recognition: "BSc. in CSE",
    email: "mailto:mdsohagislam25@gmail.com",
    imageUrl: "/images/committee/Sohag Srz.jfif",
    facebookUrl: "https://www.facebook.com/sohagsrz",
    linkedinUrl: "https://www.linkedin.com/in/sohagsrz",
  },
  {
    name: "Abdul Ahad Bin Younus",
    email: "a.ahad@ieee.org",
    facebookUrl: "https://www.facebook.com/abdulahad.apu",
    linkedinUrl: "https://www.linkedin.com/in/abdul-ahad-bin-younus-92344b250",
    recognition: "BSc. in EEE",
    role: "Public Relation Coordinator",
    imageUrl: "/images/committee/com24/Excom/Abdul_Ahad_Apu.png",
  },
];

const cs22 = [
  {
    name: "Md. Sums Dip Sarker",
    role: "Chairperson",
    recognition: "BSc. in EEE",
    imageUrl: "/images/committee/sumsdipsarker.jpg",
    email: "mailto:Sumsdip@ieee.org",
    facebookUrl: "https://www.facebook.com/sums.dip",
    linkedinUrl: "https://www.linkedin.com/in/sums-dip-sarker-84638121b",
  },
  {
    name: "Fahim Haider",
    role: "Vice-Chairperson",
    recognition: "BSc. in CSE",
    imageUrl: "/images/committee/Fahim-Haider-400x600.jpeg",
    email: "mailto:fhmhaider19@gmail.com",
    facebookUrl: "https://www.facebook.com/wolf.eye.19",
    linkedinUrl: "https://www.linkedin.com/in/fahimhaider19/",
  },
  {
    name: "Md.Tamzid Hasan",
    role: "Secretary",
    recognition: "BSc. in EEE",
    imageUrl: "/images/committee/MD.-TAMZID-HASAN-400x600.jpeg",
    email: "mailto:tamzidhasan737@gmail.com",
    facebookUrl: "https://www.facebook.com/tamzid.hasan.737/",
    linkedinUrl: "https://www.linkedin.com/in/tamzid-hasan/",
  },
  {
    name: "Riad Al Hasan",
    role: "Treasurer",
    recognition: "BSc. in CSE",
    imageUrl: "/images/committee/Riad-Al-Hasan-400x600.jpeg",
    email: "mailto:riadalhasan@ieee.org",
    facebookUrl: "https://www.facebook.com/Riad.Al.Hasan.1065/",
    linkedinUrl: "https://www.linkedin.com/in/riad-al-hasan-89893123a/",
  },
];

const cs23 = [
  {
    name: "Fahim Haider",
    role: "Chapter Chairperson",
    recognition: "BSc. in CSE",
    email: "mailto:fhmhaider19@gmail.com",
    imageUrl: "/images/committee/Fahim-Haider-400x600.jpeg",
    facebookUrl: "https://www.facebook.com/wolf.eye.19",
    linkedinUrl: "https://www.linkedin.com/in/fahimhaider19/",
  },
  {
    name: "Shafayet Ullah",
    role: "Chapter Secretary",
    recognition: "BSc. in EEE",
    email: "mailto:#",
    imageUrl: "/images/committee/shefayet.jpg",
    facebookUrl: "https://www.facebook.com/shefayet.ador",
    linkedinUrl: "https://www.linkedin.com/mwlite/in/shafayet-ullah-9009a0267",
  },
  {
    name: "Sameen Khan",
    role: "Chapter Treasurer",
    recognition: "BSc. in EEE",
    email: "mailto:sameen1820@gmail.com",
    imageUrl: "/images/committee/sameen.jpg",
    facebookUrl: "https://www.facebook.com/sameen.khan20",
    linkedinUrl: "https://www.linkedin.com/in/sameen-khan-b56997267",
  },
];

const cs24 = [
  {
    name: "Sameen Khan",
    email: "sameen_khan@ieee.org",
    facebookUrl: "https://www.facebook.com/sameen.khan20",
    linkedinUrl: "https://www.linkedin.com/in/sameen-khan-b56997267",
    recognition: "BSc. in EEE",
    role: "Chapter Chairperson",
    imageUrl: "/images/committee/sameen.jpg",
  },
  {
    name: "Shifat Arman",
    email: "shifatshiam@ieee.org",
    facebookUrl: "https://www.facebook.com/shifatarman.shiam",
    linkedinUrl: "https://www.linkedin.com/in/shifat-arman-629880252/",
    recognition: "BSc. in CSE",
    role: "Chapter Secretary",
    imageUrl: "/images/committee/com24/Excom/Shifat_arman.png",
  },
  {
    name: "Shafayet Ullah Ador",
    email: "shafayetullah@ieee.org",
    facebookUrl: "https://www.facebook.com/shefayet.ador",
    linkedinUrl: "https://www.linkedin.com/mwlite/in/shafayet-ullah-9009a0267",
    recognition: "BSc. in EEE",
    role: "Chapter Treasurer",
    imageUrl: "/images/committee/com24/Excom/Shafayet_Ador.png",
  },
];

function EXCOM(props) {
  const list1 = props.people[0];
  const list2 = props.people[1];
  const list3 = props.people.filter((p, i) => {
    if (i >= 2 && i <= 3) return p;
  });

  const list4 = props.people.filter((p, i) => {
    if (i >= 4 && i <= 5) return p;
  });

  const all = props.people.filter((p, i) => {
    if (i >= 6) {
      if (props.people[props.people.length - 1] === p && props.year !== 2022) {
        return null;
      } else return p;
    }
  });

  const last = props.people.filter((p, i) => {
    if (props.year === 2022) {
      return null;
    } else {
      return p;
    }
  });

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-12 px-6 text-center lg:px-8 lg:py-24">
        <div className="space-y-12">
          <div className="space-y-5 sm:mx-auto">
            <h1 className="mt-1 text-4xl font-extrabold bg-gradient-to-r from-cyan-500 to-cyan-900 bg-clip-text text-transparent sm:text-5xl sm:tracking-tight lg:text-6xl text-center">
              Executive Committee {props.year}
            </h1>
          </div>
          <ul
            role="list"
            className="mx-auto space-y-16 sm:grid auto-rows-max sm:grid-cols-1 sm:gap-12 sm:space-y-0 lg:max-w-5xl lg:grid-cols-1 justify-center content-center	"
          >
            <li>
              <TeamCard1 person={list1} />
            </li>
          </ul>

          <ul
            role="list"
            className="mx-auto space-y-16 sm:grid auto-rows-max sm:grid-cols-1 sm:gap-12 sm:space-y-0 lg:max-w-5xl lg:grid-cols-1 justify-center content-center	"
          >
            <li>
              <TeamCard1 person={list2} />
            </li>
          </ul>

          <ul
            role="list"
            className="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:max-w-5xl lg:grid-cols-2  justify-center content-center"
          >
            {list3.map((p) => (
              <li key={p.name}>
                <TeamCard1 person={p} />
              </li>
            ))}
          </ul>

          <ul
            role="list"
            className="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:max-w-5xl lg:grid-cols-2  justify-center content-center"
          >
            {list4.map((p) => (
              <li key={p.name}>
                <TeamCard1 person={p} />
              </li>
            ))}
          </ul>

          <ul
            role="list"
            className="mx-auto space-y-16 sm:grid sm:grid-cols-3 sm:gap-12 sm:space-y-0 lg:max-w-5xl lg:grid-cols-3  justify-center content-center"
          >
            {all.map((p) => (
              <li key={p.name}>
                <TeamCard1 person={p} />
              </li>
            ))}
          </ul>

          {/* <ul
            role="list"
            className="mx-auto space-y-16 sm:grid sm:grid-cols-3 sm:gap-12 sm:space-y-0 lg:max-w-5xl lg:grid-cols-3  justify-center content-center"
          >
            {list6.map((p) => (
              <li key={p.name}>
                <TeamCard1 person={p} />
              </li>
            ))}
          </ul>

          <ul
            role="list"
            className="mx-auto space-y-16 sm:grid sm:grid-cols-3 sm:gap-12 sm:space-y-0 lg:max-w-5xl lg:grid-cols-3  justify-center content-center"
          >
            {list7.map((p) => (
              <li key={p.name}>
                <TeamCard1 person={p} />
              </li>
            ))}
            </ul>*/}

          <ul
            role="list"
            className="mx-auto space-y-16 sm:grid auto-rows-max sm:grid-cols-1 sm:gap-12 sm:space-y-0 lg:max-w-5xl lg:grid-cols-1 justify-center content-center	"
          >
            <li>
              <TeamCard1 person={last[props.people.length - 1]} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

// function EXCOM20(props) {
//   const list1 = props.people[0];
//   const list2 = props.people[1];
//   const list3 = props.people.filter((p, i) => {
//     if (i >= 2 && i <= 3) return p;
//   });

//   const list4 = props.people.filter((p, i) => {
//     if (i >= 4 && i <= 5) return p;
//   });

//   const all = props.people.filter((p, i) => {
//     if (i >= 6) {
//       return p;
//     }
//   });

//   const last = props.people.filter((p, i) => {
//     if (props.year === 2022) {
//       return null;
//     } else {
//       return p;
//     }
//   });

//   return (
//     <div className="bg-white">
//       <div className="mx-auto max-w-7xl py-12 px-6 text-center lg:px-8 lg:py-24">
//         <div className="space-y-12">
//           <div className="space-y-5 sm:mx-auto">
//             <h1 className="mt-1 text-4xl font-extrabold bg-gradient-to-r from-cyan-500 to-cyan-900 bg-clip-text text-transparent sm:text-5xl sm:tracking-tight lg:text-6xl text-center">
//               Executive Committee {props.year}
//             </h1>
//           </div>
//           <ul
//             role="list"
//             className="mx-auto space-y-16 sm:grid auto-rows-max sm:grid-cols-1 sm:gap-12 sm:space-y-0 lg:max-w-5xl lg:grid-cols-1 justify-center content-center	"
//           >
//             <li>
//               <TeamCard1 person={list1} />
//             </li>
//           </ul>

//           <ul
//             role="list"
//             className="mx-auto space-y-16 sm:grid auto-rows-max sm:grid-cols-1 sm:gap-12 sm:space-y-0 lg:max-w-5xl lg:grid-cols-1 justify-center content-center	"
//           >
//             <li>
//               <TeamCard1 person={list2} />
//             </li>
//           </ul>

//           <ul
//             role="list"
//             className="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:max-w-5xl lg:grid-cols-2  justify-center content-center"
//           >
//             {list3.map((p) => (
//               <li key={p.name}>
//                 <TeamCard1 person={p} />
//               </li>
//             ))}
//           </ul>

//           <ul
//             role="list"
//             className="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:max-w-5xl lg:grid-cols-2  justify-center content-center"
//           >
//             {list4.map((p) => (
//               <li key={p.name}>
//                 <TeamCard1 person={p} />
//               </li>
//             ))}
//           </ul>

//           <ul
//             role="list"
//             className="mx-auto space-y-16 sm:grid sm:grid-cols-3 sm:gap-12 sm:space-y-0 lg:max-w-5xl lg:grid-cols-3  justify-center content-center"
//           >
//             {all.map((p) => (
//               <li key={p.name}>
//                 <TeamCard1 person={p} />
//               </li>
//             ))}
//           </ul>

//           {/* <ul
//             role="list"
//             className="mx-auto space-y-16 sm:grid sm:grid-cols-3 sm:gap-12 sm:space-y-0 lg:max-w-5xl lg:grid-cols-3  justify-center content-center"
//           >
//             {list6.map((p) => (
//               <li key={p.name}>
//                 <TeamCard1 person={p} />
//               </li>
//             ))}
//           </ul>

//           <ul
//             role="list"
//             className="mx-auto space-y-16 sm:grid sm:grid-cols-3 sm:gap-12 sm:space-y-0 lg:max-w-5xl lg:grid-cols-3  justify-center content-center"
//           >
//             {list7.map((p) => (
//               <li key={p.name}>
//                 <TeamCard1 person={p} />
//               </li>
//             ))}
//             </ul>*/}
//         </div>
//       </div>
//     </div>
//   );
// }

function EXCOM24(props) {
  const { people, year } = props;

  const list1 = people[0];
  const list2 = people[1];
  const list3 = people[2];
  const list4 = people.slice(3, 5);
  const all = people.slice(5, 14);

  const last = people.slice(14, 16);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-12 px-6 text-center lg:px-8 lg:py-24">
        <div className="space-y-12">
          <div className="space-y-5 sm:mx-auto">
            <h1 className="mt-1 text-4xl font-extrabold bg-gradient-to-r from-cyan-500 to-cyan-900 bg-clip-text text-transparent sm:text-5xl sm:tracking-tight lg:text-6xl text-center">
              Executive Committee {year}
            </h1>
          </div>

          <ul className="mx-auto space-y-16 sm:grid sm:grid-cols-1 sm:gap-12 sm:space-y-0 lg:max-w-5xl">
            <li>
              <TeamCard1 person={list1} />
            </li>
          </ul>

          <ul className="mx-auto space-y-16 sm:grid sm:grid-cols-1 sm:gap-12 sm:space-y-0 lg:max-w-5xl">
            <li>
              <TeamCard1 person={list2} />
            </li>
          </ul>

          <ul className="mx-auto space-y-16 sm:grid sm:grid-cols-1 sm:gap-12 sm:space-y-0 lg:max-w-5xl">
            <li>
              <TeamCard1 person={list3} />
            </li>
          </ul>

          {[list4].map((list, index) => (
            <ul
              key={index}
              className="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:max-w-5xl"
            >
              {list.map((p) => (
                <li key={p.name}>
                  <TeamCard1 person={p} />
                </li>
              ))}
            </ul>
          ))}

          <ul className="mx-auto space-y-16 sm:grid sm:grid-cols-3 sm:gap-12 sm:space-y-0 lg:max-w-5xl">
            {all.map((p) => (
              <li key={p.name}>
                <TeamCard1 person={p} />
              </li>
            ))}
          </ul>

          {[last].map((list, index) => (
            <ul
              key={index}
              className="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:max-w-5xl"
            >
              {list.map((p) => (
                <li key={p.name}>
                  <TeamCard1 person={p} />
                </li>
              ))}
            </ul>
          ))}

          {/* {last.length > 0 && (
            <ul className="mx-auto space-y-16 sm:grid sm:grid-cols-1 sm:gap-12 sm:space-y-0 lg:max-w-5xl">
              <li>
                <TeamCard1 person={last[last.length - 1]} />
              </li>
            </ul>
          )} */}
        </div>
      </div>
    </div>
  );
}

function VOL23({ people, year }) {
  const allCards = people;

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-12 px-6 text-center lg:px-8 lg:py-24">
        <div className="space-y-12">
          <h1 className="mt-1 text-4xl font-extrabold bg-gradient-to-r from-cyan-500 to-cyan-900 bg-clip-text text-transparent sm:text-5xl sm:tracking-tight lg:text-6xl">
            Volunteers {year}
          </h1>
          <ul
            role="list"
            className="mx-auto grid gap-y-16 sm:grid-cols-3 sm:gap-12 lg:max-w-5xl lg:grid-cols-4"
          >
            {allCards.map((person, i) => (
              <li key={i}>
                <TeamCard1 person={person} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function VOL({ people, year }) {
  const allCards = people.slice(0, -1); // All but the last card
  const lastCard = people[people.length - 1]; // Last card

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-12 px-6 text-center lg:px-8 lg:py-24">
        <div className="space-y-12">
          <h1 className="mt-1 text-4xl font-extrabold bg-gradient-to-r from-cyan-500 to-cyan-900 bg-clip-text text-transparent sm:text-5xl sm:tracking-tight lg:text-6xl">
            Volunteers {year}
          </h1>
          <ul
            role="list"
            className="mx-auto grid gap-y-16 sm:grid-cols-3 sm:gap-12 lg:max-w-5xl lg:grid-cols-4"
          >
            {allCards.map((person, i) => (
              <li key={i}>
                <TeamCard1 person={person} />
              </li>
            ))}
          </ul>
          <div className="mt-16">
            <ul
              role="list"
              className="mx-auto grid gap-y-16 sm:grid-cols-3 sm:gap-12 lg:max-w-3xl lg:grid-cols-3"
            >
              <li className="col-start-2">
                <TeamCard1 person={lastCard} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function Ias(props) {
  const list1 = props.people[0];
  const list3 = props.people.filter((p, i) => {
    if (i >= 1 && i <= 2) return p;
  });
  const all = props.people.filter((p, i) => {
    if (i > 2) return p;
  });

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-12 px-6 text-center lg:px-8 lg:py-24">
        <div className="space-y-12">
          <div className="space-y-5 sm:mx-auto">
            <h1 className="mt-1 text-4xl font-extrabold bg-gradient-to-r from-cyan-500 to-cyan-900 bg-clip-text text-transparent sm:text-5xl sm:tracking-tight lg:text-6xl text-center">
              Industry Applications Society Committee {props.year}
            </h1>
          </div>
          <ul
            role="list"
            className="mx-auto space-y-16 sm:grid auto-rows-max sm:grid-cols-1 sm:gap-12 sm:space-y-0 lg:max-w-5xl lg:grid-cols-1 justify-center content-center	"
          >
            <li>
              <TeamCard1 person={list1} />
            </li>
          </ul>

          <ul
            role="list"
            className="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:max-w-5xl lg:grid-cols-2  justify-center content-center"
          >
            {list3.map((p) => (
              <li key={p.name}>
                <TeamCard1 person={p} />
              </li>
            ))}
          </ul>

          <ul
            role="list"
            className="mx-auto space-y-16 sm:grid sm:grid-cols-3 sm:gap-12 sm:space-y-0 lg:max-w-5xl lg:grid-cols-3  justify-center content-center"
          >
            {all.map((p) => (
              <li key={p.name}>
                <TeamCard1 person={p} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function Embs(props) {
  const list1 = props.people[0];
  const list2 = props.people.filter((p, i) => {
    if (i >= 1 && i <= 2) return p;
  });
  const last = props.people.filter((p, i) => {
    if (i > 2) return p;
  });

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-12 px-6 text-center lg:px-8 lg:py-24">
        <div className="space-y-12">
          <div className="space-y-5 sm:mx-auto">
            <h1 className="mt-1 text-4xl font-extrabold bg-gradient-to-r from-cyan-500 to-cyan-900 bg-clip-text text-transparent sm:text-5xl sm:tracking-tight lg:text-6xl text-center">
              Engineering in Medicine and Biology Society Committee {props.year}
            </h1>
          </div>
          <ul
            role="list"
            className="mx-auto space-y-16 sm:grid auto-rows-max sm:grid-cols-1 sm:gap-12 sm:space-y-0 lg:max-w-5xl lg:grid-cols-1 justify-center content-center	"
          >
            <li>
              <TeamCard1 person={list1} />
            </li>
          </ul>

          <ul
            role="list"
            className="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:max-w-5xl lg:grid-cols-2  justify-center content-center"
          >
            {list2.map((p) => (
              <li key={p.name}>
                <TeamCard1 person={p} />
              </li>
            ))}
          </ul>

          <ul
            role="list"
            className="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:max-w-6xl lg:grid-cols-3  justify-center content-center"
          >
            {last.map((p) => (
              <li key={p.name} className="col-start-2">
                <TeamCard1 person={p} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function Wie(props) {
  const list1 = props.people[0];
  const list3 = props.people.filter((p, i) => {
    if (i >= 1 && i <= 2) return p;
  });

  const list4 = props.people[3];

  const all = props.people.filter((p, i) => {
    if (i > 3) return p;
  });

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-12 px-6 text-center lg:px-8 lg:py-24">
        <div className="space-y-12">
          <div className="space-y-5 sm:mx-auto">
            <h1 className="mt-1 text-4xl font-extrabold bg-gradient-to-r from-cyan-500 to-cyan-900 bg-clip-text text-transparent sm:text-5xl sm:tracking-tight lg:text-6xl text-center">
              Women In Engineering Affinity Group Committee {props.year}
            </h1>
          </div>
          <ul
            role="list"
            className="mx-auto space-y-16 sm:grid auto-rows-max sm:grid-cols-1 sm:gap-12 sm:space-y-0 lg:max-w-5xl lg:grid-cols-1 justify-center content-center	"
          >
            <li>
              <TeamCard1 person={list1} />
            </li>
          </ul>

          <ul
            role="list"
            className="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:max-w-5xl lg:grid-cols-2  justify-center content-center"
          >
            {list3.map((p) => (
              <li key={p.name}>
                <TeamCard1 person={p} />
              </li>
            ))}
          </ul>

          <ul
            role="list"
            className="mx-auto space-y-16 sm:grid auto-rows-max sm:grid-cols-1 sm:gap-12 sm:space-y-0 lg:max-w-5xl lg:grid-cols-1 justify-center content-center	"
          >
            <li>
              <TeamCard1 person={list4} />
            </li>
          </ul>

          <ul
            role="list"
            className="mx-auto space-y-16 sm:grid sm:grid-cols-3 sm:gap-12 sm:space-y-0 lg:max-w-5xl lg:grid-cols-3 justify-center content-center"
          >
            {all.map((p) => (
              <li key={p.name}>
                <TeamCard1 person={p} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function Mtts(props) {
  const list1 = props.people[0];
  const list3 = props.people.filter((p, i) => {
    if (i >= 1 && i <= 2) return p;
  });
  const all = props.people.filter((p, i) => {
    if (i > 2) return p;
  });

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-12 px-6 text-center lg:px-8 lg:py-24">
        <div className="space-y-12">
          <div className="space-y-5 sm:mx-auto">
            <h1 className="mt-1 text-4xl font-extrabold bg-gradient-to-r from-cyan-500 to-cyan-900 bg-clip-text text-transparent sm:text-5xl sm:tracking-tight lg:text-6xl text-center">
              Microwave Theory and Technology Society Committee {props.year}
            </h1>
          </div>
          <ul
            role="list"
            className="mx-auto space-y-16 sm:grid auto-rows-max sm:grid-cols-1 sm:gap-12 sm:space-y-0 lg:max-w-5xl lg:grid-cols-1 justify-center content-center	"
          >
            <li>
              <TeamCard1 person={list1} />
            </li>
          </ul>

          <ul
            role="list"
            className="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:max-w-5xl lg:grid-cols-2  justify-center content-center"
          >
            {list3.map((p) => (
              <li key={p.name}>
                <TeamCard1 person={p} />
              </li>
            ))}
          </ul>

          <ul
            role="list"
            className="mx-auto space-y-16 sm:grid sm:grid-cols-3 sm:gap-12 sm:space-y-0 lg:max-w-5xl lg:grid-cols-3  justify-center content-center"
          >
            {all.map((p) => (
              <li key={p.name}>
                <TeamCard1 person={p} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function CS23(props) {
  const list1 = props.people[0];
  const list3 = props.people.filter((p, i) => {
    if (i >= 1 && i <= 2) return p;
  });
  const all = props.people.filter((p, i) => {
    if (i >= 1) {
      if (props.people[props.people.length - 1] === p && props.year === 2022) {
        return null;
      } else return p;
    }
  });
  const last = props.people.filter((p, i) => {
    if (props.year != 2022) return null;
    else return p;
  });

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-12 px-6 text-center lg:px-8 lg:py-24">
        <div className="space-y-12">
          <div className="space-y-5 sm:mx-auto">
            <h1 className="mt-1 text-4xl font-extrabold bg-gradient-to-r from-cyan-500 to-cyan-900 bg-clip-text text-transparent sm:text-5xl sm:tracking-tight lg:text-6xl text-center">
              Computer Society Committee {props.year}
            </h1>
          </div>
          <ul
            role="list"
            className="mx-auto space-y-16 sm:grid auto-rows-max sm:grid-cols-1 sm:gap-12 sm:space-y-0 lg:max-w-5xl lg:grid-cols-1 justify-center content-center	"
          >
            <li>
              <TeamCard1 person={list1} />
            </li>
          </ul>

          <ul
            role="list"
            className="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:max-w-5xl lg:grid-cols-2  justify-center content-center"
          >
            {all.map((p) => (
              <li key={p.name}>
                <TeamCard1 person={p} />
              </li>
            ))}
          </ul>

          <ul
            role="list"
            className="mx-auto space-y-16 sm:grid auto-rows-max sm:grid-cols-1 sm:gap-12 sm:space-y-0 lg:max-w-5xl lg:grid-cols-1 justify-center content-center	"
          >
            <li>
              <TeamCard1 person={last[props.people.length - 1]} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function Page({ params }) {
  console.log(params.slug);
  if (params.slug[2]) return notFound();
  if (isNaN(params.slug[0])) {
    switch (params.slug[0]) {
      case "executive-committee":
        return <EXCOM24 people={excom24} year={2024} />;
        break;
      case "volunteers":
        return <VOL23 people={vol24} year={2024} />;
      case "cs-committee":
        return <CS23 people={cs24} year={2024} />;
      case "ias-committee":
        return <Ias people={ias24} year={2024} />;
      case "mtts-committee":
        return <Mtts people={mtts24} year={2024} />;
      case "embs-committee":
        return <Embs people={embs24} year={2024} />;
      case "wie-committee":
        return <Wie people={wie24} year={2024} />;
      default:
        return notFound();
    }
  } else if (Number(params.slug[0]) > 2024 || Number(params.slug[0]) < 2012)
    return notFound();
  else if (params.slug[1]) {
    switch (params.slug[1]) {
      case "executive-committee":
        if (params.slug[0] == 2024)
          return <EXCOM24 people={excom24} year={2024} />;
        if (params.slug[0] == 2023)
          return <EXCOM people={excom23} year={2023} />;
        if (params.slug[0] == 2022)
          return <EXCOM people={excom22} year={2022} />;
        if (params.slug[0] == 2021)
          return <EXCOM people={excom21} year={2021} />;
      //   if (params.slug[0] == 2020)
      //     return <EXCOM20 people={excom20} year={2020} />;
      // if (params.slug[0] == 2019)
      //   return <EXCOM20 people={excom19} year={2019} />;

      // if (params.slug[0] == 2023)
      //   return <EXCOM people={excom23} year={2023} />;

      case "volunteers":
        if (params.slug[0] == 2024) return <VOL23 people={vol24} year={2024} />;
        if (params.slug[0] == 2023) return <VOL23 people={vol23} year={2023} />;
        if (params.slug[0] == 2022) return <VOL people={vol22} year={2022} />;
        if (params.slug[0] == 2021) return <VOL people={vol21} year={2021} />;
      case "cs-committee":
        if (params.slug[0] == 2024) return <CS23 people={cs24} year={2024} />;
        if (params.slug[0] == 2023) return <CS23 people={cs23} year={2023} />;
        if (params.slug[0] == 2022) return <CS23 people={cs22} year={2022} />;
      case "ias-committee":
        if (params.slug[0] == 2024) return <Ias people={ias24} year={2024} />;
        if (params.slug[0] == 2023) return <Ias people={ias23} year={2023} />;
        if (params.slug[0] == 2022) return <Ias people={ias22} year={2022} />;
      case "mtts-committee":
        if (params.slug[0] == 2024) return <Mtts people={mtts24} year={2024} />;
        if (params.slug[0] == 2023) return <Mtts people={mtts23} year={2023} />;
        if (params.slug[0] == 2022) return <Mtts people={mtts22} year={2022} />;
      case "embs-committee":
        if (params.slug[0] == 2024) return <Embs people={embs24} year={2024} />;
        if (params.slug[0] == 2023) return <Embs people={embs23} year={2023} />;
        if (params.slug[0] == 2022) return <Embs people={embs22} year={2022} />;
      case "wie-committee":
        if (params.slug[0] == 2024) return <Wie people={wie24} year={2024} />;
        if (params.slug[0] == 2023) return <Wie people={wie23} year={2023} />;
        if (params.slug[0] == 2022) return <Wie people={wie22} year={2022} />;

      default:
        return notFound();
    }
  } else if (params.slug[0]) return <Panel year={params.slug[0]} />;
}
