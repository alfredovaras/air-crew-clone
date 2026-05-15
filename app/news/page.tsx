"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Search, X, Tag, Filter, ChevronRight, ChevronLeft } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { PageHero } from "@/components/page-hero"

// Adicione um ID para cada item para facilitar a identificação
const processedNewsItems = [
  {
    "title": "Technische Universität Dresden and AMST Unveil World’s First Self-Driving Simulator at Dresden Automotive Symposium",
    "url": "/news/technische-universitat-dresden-and-amst-unveil-worlds-first-self-driving-simulator-at-dresden-automotive-symposium/",
    "date": "2024-10-01T17:43:23",
    "content": "Ranshofen, 1 October 2024 – AMST and Technische Universität Dresden successfully launched the Dresden Driving Simulator (DDS), the world’s first self-driving simulator, at the Dresden Automotive Symposium on 26 September 2024. The DDS introduces a groundbreaking approach by bridging a critical gap in simulation technology. It is the first driving simulator capable of providing sustained […]",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2024/10/AMST-News-AM-2024-10-01_Driving_Simulator_Rollout_4.jpg",
    "categories": [
      "news-aerospace-medicine",
      "news-visual-systems",
      "news-civil-aviation"
    ],
    "tags": ["dresden", "driving", "simulator", "first", "technische"]
  },
  {
    "title": "Ansett Aviation Training and AMST Sign Contract for Airbus A320 CEO/NEO Std. 2.1 FFS in Dubai",
    "url": "/news/ansett-aviation-training-and-amst-sign-contract-for-airbus-a320-ceo-neo-std-2-1-ffs-in-dubai/",
    "date": "2024-03-05T15:29:51",
    "content": "Dubai/Nieuw-Vennep, March 2024 – Ansett Aviation Training and AMST have signed a contract for an AMST AIRFOX Level D Full Flight Simulator (FFS) for Airbus A320 CEO/NEO Std. 2.1. Ready-for-Training date will be in Q3 2024. The signing ceremony was held at Ansett Aviation Training’s Dubai Training Centre on 29 January 2024, marking a significant […]",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2024/03/AMST-News-CA-2024-03-05_Ansett_FFS_1.jpg",
    "categories": [
      "news-aerospace-medicine",
      "news-visual-systems",
      "news-civil-aviation"
    ],
    "tags": ["training", "ansett", "aviation", "amst", "dubai"]
  },
  {
    "title": "Orbit Flight Training Center and AMST Announce Project for 3 Full Flight Simulators",
    "url": "/news/orbit-flight-training-center-and-amst-announce-project-for-3-full-flight-simulators/",
    "date": "2024-01-18T15:06:02",
    "content": "Hyderabad/Nieuw-Vennep, January 2024 – In a significant move to bolster India’s aviation training infrastructure, Orbit Flight Training Center, based in Hyderabad and AMST have achieved an agreement for 3 state-of-the-art AIRFOX Full Flight Simulators, comprising 2 A320 NEO and 1 B737 MAX simulators. This significant project has been announced during the prestigious Wings India 2024 […]",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2024/01/AMST-News-CA-2024-01-18_Orbit_FFS_Project.jpg",
    "categories": [
      "news-aerospace-medicine",
      "news-visual-systems",
      "news-civil-aviation"
    ],
    "tags": ["flight", "training", "simulators", "orbit", "center"]
  },
  {
    "title": "Press Release: ICARE and AMST Celebrate the Successful Qualification of A320 AIRFOX Full Flight Simulator",
    "url": "/news/press-release-icare-and-amst-celebrate-the-successful-qualification-of-a320-airfox-full-flight-simulator/",
    "date": "2023-12-20T13:36:54",
    "content": "Morlaix/Nieuw-Vennep, December 2023 – ICARE Training Center, based in Morlaix, France and AMST proudly announce the successful qualification of the AIRFOX Level D Full Flight Simulator (FFS) for Airbus A320 Std2.1 CEO/NEO. This milestone achievement took place on 15 December 2023. The AIRFOX FFS, designed and manufactured by AMST, has been rigorously tested and has successfully […]",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2023/12/AMST-News-CA-2023-12-20_ICARE_FFS_Qualification.jpg",
    "categories": [
      "news-aerospace-medicine",
      "news-visual-systems",
      "news-civil-aviation"
    ],
    "tags": ["amst", "airfox", "icare", "successful", "qualification"]
  },
  {
    "title": "Press Release: AMST Awarded Contract for A320 FTD Level 2 Flight Simulator with Sofia Flight Training",
    "url": "/news/press-release-amst-awarded-contract-for-a320-ftd-level-2-flight-simulator-with-sofia-flight-training/",
    "date": "2023-05-08T16:53:05",
    "content": "Nieuw-Vennep, May 2023 ‒ AMST, a leading provider of simulation and training solutions, is proud to announce that it has been awarded a contract by Sofia Flight Training for an A320 FTD Level 2 Flight Simulator. The simulator’s visual system will be powered by AMST’s cutting-edge VISIM Image Generator, which provides a best-in-class out-the-window view […]",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2023/05/AMST-News-CA-2023-05-08_SFT_A320_FTD.jpg",
    "categories": [
      "news-aerospace-medicine",
      "news-visual-systems",
      "news-civil-aviation"
    ],
    "tags": ["flight", "amst", "simulator", "training", "awarded"]
  },
  {
    "title": "Press Release: AMST is Awarded a Contract for an A320 FTD Level 1 for IFTC (International Flight Training Center), Istanbul",
    "url": "/news/press-release-amst-is-awarded-a-contract-for-an-a320-ftd-level-1-for-iftc-international-flight-training-center-istanbul/",
    "date": "2023-04-18T21:29:34",
    "content": "Nieuw-Vennep, April 2023 – AMST, a leading provider of flight simulation solutions, is proud to announce that it has been awarded a contract by IFTC, Istanbul for an A320 FTD Level 1 flight simulator. The company will deliver the A320 FTD with AMST’s proven simulation software and high-end hardware, ensuring a realistic and accurate training […]",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2023/04/AMST-News-CA-2023-04-18_IFTC_A320_FTD.jpg",
    "categories": [
      "news-aerospace-medicine",
      "news-visual-systems",
      "news-civil-aviation"
    ],
    "tags": ["amst", "flight", "awarded", "contract", "level"]
  },
  {
    "title": "Press Release: AMST selected by Airbus as a Supplier for Flight Simulation Training Devices",
    "url": "/news/press-release-amst-selected-by-airbus-as-a-supplier-for-flight-simulation-training-devices/",
    "date": "2023-04-05T11:20:08",
    "content": "Nieuw-Vennep, April 2023 – AMST has been selected by Airbus as a supplier for Flight Simulation Training Devices (FSTDs). The agreement with Airbus is a first milestone of a future business collaboration between Airbus and AMST. This is also an excellent opportunity for AMST to further develop its commercial aviation pilot training business. AMST is […]",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2023/04/AMST-News-CA-2023-04-05_Airbus_Selected_Supplier.jpg",
    "categories": [
      "news-aerospace-medicine",
      "news-visual-systems",
      "news-civil-aviation"
    ],
    "tags": ["amst", "airbus", "training", "selected", "supplier"]
  },
  {
    "title": "Press Release: ICARE and AMST Sign Contract for A320 FFS at EATS 2022",
    "url": "/news/press-release-icare-and-amst-sign-contract-for-a320-ffs-at-eats-2022/",
    "date": "2022-11-08T14:20:05",
    "content": "ICARE Training Center Awards Contract for Airbus A320 Std2.1 CEO/NEO Level D Full Flight Simulator to AMST Morlaix/Nieuw-Vennep, November 2022 – ICARE Training Center, based in Morlaix, France awarded a contract for an AIRFOX FFS device to AMST. The signing ceremony took place at EATS 2022 on 8 November 2022. Under the contract, AMST will […]",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2022/11/AMST-News-CA-2022-11-08_ICARE_FFS.jpg",
    "categories": [
      "news-aerospace-medicine",
      "news-visual-systems",
      "news-civil-aviation"
    ],
    "tags": ["amst", "contract", "icare", "eats", "training"]
  },
  {
    "title": "Press Release: H145 Simulator",
    "url": "/news/press-release-h145-simulator/",
    "date": "2022-11-02T15:01:00",
    "content": "New Helicopter Simulator for the Bavarian Simulation Center in Bad Toelz, Germany – AMST Builds Simulator Modeled on the Airbus H145 Helicopter Cooperation between AMST and the Mountain Rescue Center for Safety and Training (Bergwacht-Zentrum für Sicherheit und Ausbildung, BW-ZSA) Reaches the Next Level Bad Toelz, Germany/Ranshofen, Austria, November 2022 – From mid 2023, a […]",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2022/11/AMST-News-AM-2022-11-02_H145_Mockup.jpg",
    "categories": [
      "news-aerospace-medicine",
      "news-visual-systems",
      "news-civil-aviation"
    ],
    "tags": ["simulator", "helicopter", "center", "toelz", "germany"]
  },
  {
    "title": "AIRPOWER 2022",
    "url": "/news/airpower-2022/",
    "date": "2022-08-10T13:24:41",
    "content": "Innovation in Simulation at AIRPOWER 2022! Meet AMST at the Technology and Business Exhibition during AIRPOWER 2–3 September in Zeltweg, Austria. We are looking forward to discussing with you industry-leading solutions for aircrew training.",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2022/08/AMST-News-AM-2022-08-10-AIRPOWER_2022.jpg",
    "categories": [
      "news-aerospace-medicine",
      "news-visual-systems",
      "news-civil-aviation"
    ],
    "tags": ["airpower", "innovation", "simulation", "meet", "amst"]
  },
  {
    "title": "Image Quality Accelerated by Norxe and AMST",
    "url": "/news/image-quality-accelerated-by-norxe-and-amst/",
    "date": "2022-07-21T15:40:00",
    "content": "4K/240 Hz Projection at 15 G A high-G version of the P50 projector with 4K resolution at 240 Hz has been released by Norxe in July 2022. The Norwegian company partnered with AMST, an expert in dynamic high-G flight simulation from Austria, to make the projector withstand enormous accelerations of up to 15 G. AMST […]",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2022/07/AMST-News-AM-2022-07-21_Norxe_P50_High-G_2.jpg",
    "categories": [
      "news-aerospace-medicine",
      "news-visual-systems",
      "news-civil-aviation"
    ],
    "tags": ["amst", "norxe", "high", "projector", "with"]
  },
  {
    "title": "Captain Joe at AMST for SD Training",
    "url": "/news/captain-joe-at-amst-for-sd-training/",
    "date": "2022-07-13T13:09:39",
    "content": "“I hate to admit it but the Upset Recovery Training we are required to fly every 3 years in our full flight simulators is nothing to what I have experienced today.” This is the summary of YouTuber Captain Joe who visited AMST to make a video on Spatial Disorientation (SD). In his video, Captain Joe […]",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2022/07/AMST-News-AM-2022-07-13-Captain_Joe_SD_Training.jpg",
    "categories": [
      "news-aerospace-medicine",
      "news-visual-systems",
      "news-civil-aviation"
    ],
    "tags": ["captain", "amst", "training", "video", "hate"]
  },
  {
    "title": "ISO Certification 2022",
    "url": "/news/iso-certification-2022/",
    "date": "2022-07-05T16:57:00",
    "content": "Building Confidence! AMST has successfully reassessed their ISO 9001 and ISO 14001 certification with TÜV. ISO 9001 specifies requirements for a quality management system to consistently provide products and services that meet customer, statutory and regulatory requirements and to enhance customer satisfaction through the effective application of the system. ISO 14001 specifies the requirements for […]",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2022/07/AMST-News-AM-2022-07-05-ISO_Certification.jpg",
    "categories": [
      "news-aerospace-medicine",
      "news-visual-systems",
      "news-civil-aviation"
    ],
    "tags": ["requirements", "certification", "specifies", "system", "customer"]
  },
  {
    "title": "Kent Gillingham Award 2022",
    "url": "/news/kent-gillingham-award-2022/",
    "date": "2022-07-01T16:46:00",
    "content": "Prof. Peter Hancock, D.Sc., Phd has received the prestigious Kent K. Gillingham Award for outstanding contributions in the field of Aerospace Medicine. The award was presented by AMST’s Aeromedical Chief Consultant Brig. Gen. (rt.) Dr. Erich Rödig and Dr. James DeVoll during ASMA Annual Scientific Meeting on 26 May 2022 in Reno. As Mr. Hancock […]",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2022/07/AMST-News-AM-2022-07-01-Gillingham_Award.jpg",
    "categories": [
      "news-aerospace-medicine",
      "news-visual-systems",
      "news-civil-aviation"
    ],
    "tags": ["award", "kent", "gillingham", "hancock", "prof"]
  },
  {
    "title": "SD Training for Austria Armed Forces 2022",
    "url": "/news/sd-training-for-austria-armed-forces-2022/",
    "date": "2022-05-20T17:04:00",
    "content": "This week, we had several groups of helicopter pilots from the Österreichisches Bundesheer (Austrian Armed Forces) at our Ranshofen HQ. The pilots visited for a Spatial Disorientation refresher training in the course of their conversion to a new helicopter type. We discussed contents and helped with tailoring the training to their specific needs. The experienced […]",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2022/07/AMST-News-AM-2022-05-20-SD_Training_Austria.jpg",
    "categories": ["news-aerospace-medicine", "news-civil-aviation"],
    "tags": ["training", "armed", "forces", "helicopter", "pilots"]
  },
  {
    "title": "RHT/UWETS Asia Repeat Order",
    "url": "/news/rht-uwets-asia-repeat-order/",
    "date": "2021-02-15T15:59:00",
    "content": "We are proud to announce a repeat order for a combined Rescue Hoist and Under Water Escape Training System. The order was placed by the South-East Asian customer who ordered the same system in October last year. We would like to thank them for their great confidence after the short period of cooperation.",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2021-02-15_RHT-UWETS_Repeat_Asia.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["order", "repeat", "system", "uwets", "asia"]
  },
  {
    "title": "Normobaric Hypoxia Acceptance",
    "url": "/news/normobaric-hypoxia-acceptance/",
    "date": "2021-02-09T15:54:00",
    "content": "AMST successfully handed over two Reduced Oxygen Breathing Devices (ROBDs) for normobaric hypoxia training to two of its AIRFOX customers. The devices are part of upgrades to existing AIRFOX ASD and AIRFOX DISO systems. Fully integrated into the AIRFOX systems, the mask-based ROBD provides realistic hypoxia effects to the pilot. Hypoxia training can be combined […]",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2021-02-09-Normobaric_Hypoxia_Acceptance.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["hypoxia", "airfox", "normobaric", "devices", "training"]
  },
  {
    "title": "Charity Donation",
    "url": "/news/charity-donation/",
    "date": "2020-12-16T15:06:00",
    "content": "Already in early autumn, the staff at our headquarters in Ranshofen decided to donate to a charitable cause instead of having a Christmas party. It was very important to the employees to support people in need living around the company location in these difficult times. The amount of 4350 Euros was given to two charities: […]",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2020-12-16-Charity_Donations.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["charity", "donation", "already", "early", "autumn"]
  },
  {
    "title": "Engl Flightteam Cooperation",
    "url": "/news/engl-flightteam-cooperation/",
    "date": "2020-11-20T14:58:00",
    "content": "Engl Flightteam, a flight training provider, signed a partnership agreement with AMST in October 2020. The cooperation focusses on Spatial Disorientation training on our AIRFOX ASD and Multi Crew Coordination (MCC) training on our newly qualified AIRFOX UPRT simulator. We wish all trainees a great time at AMST and an excellent experience with our simulation […]",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2020-11-20_Flightteam.jpg",
    "categories": ["news-aerospace-medicine", "news-civil-aviation"],
    "tags": ["training", "engl", "flightteam", "cooperation", "with"]
  },
  {
    "title": "COVID Situation Update",
    "url": "/news/covid-situation-update/",
    "date": "2020-11-18T14:55:00",
    "content": "Dear Business Partners and Colleagues! Austria’s government implemented a hard lockdown starting 17 November 2020 to curb COVID infection rates. AMST has already demonstrated during the first lockdown in Spring that it has the necessary structures, tools and – most importantly – the determination to ensure continuity and success of its business. We live core […]",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2020-11-18-COVID_Update.jpg",
    "categories": [
      "news-aerospace-medicine",
      "news-visual-systems",
      "news-civil-aviation"
    ],
    "tags": ["covid", "business", "lockdown", "situation", "update"]
  },
  {
    "title": "RHT/UWETS Asia",
    "url": "/news/rht-uwets-asia/",
    "date": "2020-11-05T14:52:00",
    "content": "AMST’s leading role for Rescue Hoist Training was underlined by a second contract for a Rescue Hoist Trainer (RHT) within the year 2020 from a South-East Asian Training Organisation. The contract also includes a complete Underwater Egress Training System (UWETS) with parachute training equipment. A lengthy evaluation procedure was finally completed with signing this contract, […]",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2020-11-05_RHT-UWETS_Asia.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["training", "contract", "uwets", "rescue", "hoist"]
  },
  {
    "title": "Short Arm Human Centrifuge on TV",
    "url": "/news/short-arm-human-centrifuge-on-tv/",
    "date": "2020-10-01T14:47:00",
    "content": "A German TV station recently reported about astronaut training with AMST’s Short Arm Human Centrifuge (SAHC) in the German Aerospace Center (DLR) in Cologne. The report shows that the SAHC can help astronauts to maintain their physical fitness in space. Of course, the reporter took the opportunity to experience artificial gravity and made a few […]",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2020-10-SAHC_TV.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["short", "human", "centrifuge", "german", "sahc"]
  },
  {
    "title": "AMST Now on YouTube",
    "url": "/news/amst-now-on-youtube/",
    "date": "2020-07-03T14:43:00",
    "content": "AMST is now on YouTube with videos in HD and playlists for our business units. Enjoy, share and subscribe to our channel to stay updated! AMST is now on YouTube with videos in HD and playlists for our business units. Enjoy, share and subscribe to our channel to stay updated!",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2020-07-YouTube.jpg",
    "categories": [
      "news-aerospace-medicine",
      "news-visual-systems",
      "news-civil-aviation"
    ],
    "tags": ["amst", "youtube", "with", "videos", "playlists"]
  },
  {
    "title": "RHT Middle East",
    "url": "/news/rht-middle-east/",
    "date": "2020-07-02T14:39:00",
    "content": "AMST is proud to announce that it will deliver two systems based on its renowned Helicopter Rescue Hoist Trainer (RHT) to a Middle Eastern customer as a subcontractor for a partner from the US. The deliverables include an RHT for safe and efficient training of winching and fast-roping and a dynamic helicopter mock-up similar to […]",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2020-07_RHT_Middle_East.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["middle", "helicopter", "east", "amst", "proud"]
  },
  {
    "title": "Astronaut Training",
    "url": "/news/astronaut-training/",
    "date": "2020-07-01T14:32:00",
    "content": "A German TV station recently reported about astronaut training with AMST equipment in the Institute of Aviation Medicine in Koenigsbrueck. The reports shows how the Human Training Centrifuge, the AIRFOX DISO and the Hypobaric Chamber are used to prepare two female astronaut candidates for space flight. One of the two candidates will fly to the […]",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2020-07-Astronaut_Training.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["astronaut", "training", "candidates", "german", "station"]
  },
  {
    "title": "Normobaric Hypoxia Upgrades",
    "url": "/news/normobaric-hypoxia-upgrades/",
    "date": "2020-05-02T06:08:52",
    "content": "Using normobaric hypoxia in spatial disorientation demonstrations enhances the training significantly. You can demonstrate the increased likelihood for SD in conditions of hypoxia and show that even mild hypoxia is a threat in combination with other factors. The ROBD is a device that generates breathing air with lowered oxygen concentration at normobaric pressure. In this […]",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2020-05_NHT_Upgrades.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["hypoxia", "normobaric", "with", "upgrades", "using"]
  },
  {
    "title": ":envifuge Upgrade Germany",
    "url": "/news/envifuge-upgrade-germany/",
    "date": "2020-05-01T06:10:32",
    "content": "After a successful study, AMST has been awarded the contract for an upgrade of the ESA equipment on the DLR Short Arm Human Centrifuge :enviFuge in Cologne, Germany that will support upcoming weightlessness countermeasures research and bedrest studies. Two configurations will enable subjects to perform either resistive exercises or jumping exercises with the new sledge […]",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2020-05_envifuge_Upgrade.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["envifuge", "upgrade", "germany", "will", "exercises"]
  },
  {
    "title": "Offshore Symposium Rostock 2020",
    "url": "/news/offshore-symposium-rostock-2020/",
    "date": "2020-02-02T06:15:15",
    "content": "AMST will participate in the 6th Offshore Symposium in Rostock, Germany from 25–26 February 2020. The Symposium is an established international congress of the wind industry and focusses on occupational health, personnel and training. In our presentation we will share experiences from 10 years of hoist training with the Helicoper Rescue Hoist Trainer (RHT) in […]",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2020-02-Offshore_Symposium.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["symposium", "offshore", "rostock", "will", "training"]
  },
  {
    "title": "AIRFOX ASD NV Upgrade Thailand",
    "url": "/news/airfox-asd-nv-upgrade-thailand/",
    "date": "2020-02-01T06:16:26",
    "content": "AMST has successfully completed the Night Vision Capability and Compatibility upgrade for the RTAF AIRFOX ASD. NVG flying in the AIRFOX ASD provides excellent benefits in developing packages for Night Vision Goggles (NVGs) familiarisation in night vision scenarios. The difficulty in judging the height and speed when using NVGs can only be demonstrated when such […]",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2020-02_AIRFOX_ASD_Upgrade_THA.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["airfox", "night", "vision", "upgrade", "nvgs"]
  },
  {
    "title": "AIRFOX DISO Contract Middle East",
    "url": "/news/airfox-diso-contract-middle-east/",
    "date": "2020-01-02T06:18:17",
    "content": "AMST is proud to announce that it has been awarded a contract for an AIRFOX DISO Spatial Disorientation Demonstrator with the full range of options by a Middle East aeromedical centre. The AIRFOX DISO will replace an aged spatial disorientation demonstrator from another OEM. VISIM Image Generator will supply the system’s out-the-window view. VISIM’s night […]",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2020-01-AIRFOX_DISO_Middle_East.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["airfox", "diso", "contract", "middle", "east"]
  },
  {
    "title": "Helicopter Conferences USA 2020",
    "url": "/news/helicopter-conferences-usa-2020/",
    "date": "2020-01-01T06:19:16",
    "content": "In January 2020, AMST participated at the Goodrich Rescue Hoist Operator‘s Conference and at HAI HeliExpo in Anaheim. AMST’s exciting solutions for Crew Coordination Centres such as the Rescue Hoist Trainer (RHT) drew much attention. As a result of fruitful discussions and negotiations, AMST and a new partner agreed on a mutual understanding for a […]",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2020-01-Helicopter_Conferences.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["amst", "rescue", "hoist", "helicopter", "conferences"]
  },
  {
    "title": "Modular HUET-SR Available",
    "url": "/news/modular-huet-sr-available/",
    "date": "2019-12-05T06:24:31",
    "content": "The HUET-S system had been redesigned and will be delivered from now on as a modular airframe. The airframe has a rotatable 6-person cabin as a core element and can be extended by cockpit modules and/or a cabin module for training of max. 10 persons. The system will be manufactured and installed in cooperation with our long […]",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2019-12-Modular_HUET_SR.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["modular", "huet", "system", "will", "airframe"]
  },
  {
    "title": "SAHC Upgrade",
    "url": "/news/sahc-upgrade/",
    "date": "2019-12-04T06:23:12",
    "content": "AMST is proud to announce that international space organisations placed orders to upgrade the Short Arm Human Centrifuge with exciting new features to support future studies. It’s been more than 5 years since AMST delivered the first Short Arm Human Centrifuge. The device is now most popular amongst space scientists due to remarkable capabilities such as smooth […]",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2019-12_SAHC_Upgrade.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["upgrade", "amst", "space", "short", "human"]
  },
  {
    "title": "HPO FAT Oman",
    "url": "/news/hpo-fat-oman/",
    "date": "2019-12-03T06:22:09",
    "content": "The aeromedical training systems for the brand new prestigious RAFO Aeromedical Centre in Muscat had been completed with the installation of a 6+2 Hypobaric Chamber. The RAFO team confirmed successful Final Acceptance on 08 October 2019. We would like to express our gratefulness to the RAFO and AMST team for the excellent and successful cooperation.",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2019-12-FAT_OMN.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["rafo", "aeromedical", "team", "successful", "oman"]
  },
  {
    "title": "EST Contract Bangladesh",
    "url": "/news/est-contract-bangladesh/",
    "date": "2019-12-02T06:20:48",
    "content": "The Bangladesh Air Force and AMST signed a contract for an Advanced Ejection Seat Trainer. We are proud to deliver in seamless sequence already the second high-end simulator to the Bangladesh Air Force and thank for their trust in our products and services.",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2019-12-EST_BGD.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["bangladesh", "contract", "force", "amst", "signed"]
  },
  {
    "title": "Driving Simulator Contract",
    "url": "/news/driving-simulator-contract/",
    "date": "2019-12-01T06:26:27",
    "content": "AMST-Systemtechnik GmbH and the Institute of Automotive Engineering of the TU Dresden develop a novel and highly immersive driving simulator in an innovation partnership. For that purpose, the innovation partners signed a contract for the development and construction of the worldwide unique automobile simulator. Self-driving, tire-based and unbound, the device creates a simulation environment, whose […]",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2019-12-Driving_Simulator.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["driving", "simulator", "contract", "innovation", "amst"]
  },
  {
    "title": "UN/Austra World Space Forum Vienna 2020",
    "url": "/news/un-austria-world-space-forum-vienna-2020/",
    "date": "2019-11-02T06:27:34",
    "content": "AMST is participating in the United Nations/Austria World Space Forum. The forum themed “Access to Space4All” takes place 18–22 November 2019 in Vienna and discusses the future of space and of international cooperation along the pillars of space economy, space society, space accessibility and space diplomacy. We are looking forward to lively discussions with you […]",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2019-11-World_Space_Forum.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["space", "forum", "world", "vienna", "austra"]
  },
  {
    "title": "High-G Projector",
    "url": "/news/high-g-projector/",
    "date": "2019-11-01T06:30:00",
    "content": "Norxe, a manufacturer of projectors for demanding applications, cooperated with AMST to develop the P1 WQXGA High G projector. The High G projector can withstand permanent acceleration forces of up to 15 G, which makes it ideal for visual display systems of human centrifuges. We thank Norxe for the excellent business cooperation.",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2019-11-High_G_Projector.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["high", "projector", "norxe", "manufacturer", "projectors"]
  },
  {
    "title": "7th User Congress Review",
    "url": "/news/7th-user-congress-review/",
    "date": "2019-09-16T06:41:00",
    "content": "From 13 to 15 September, the 7th User Congress themed “Maximising Aircrew Training Capabilities for Civilian and Military Aircraft of the 21st Century” took place in Debrecen, Hungary. The event under the patronage of the Hungarian Defence Forces gave the 71 participants from 18 different countries the opportunity to exchange knowledge and meet other experts […]",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2019-09-7th_User_Congress_Review.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["user", "congress", "review", "september", "themed"]
  },
  {
    "title": "ICASM Hungary 2019",
    "url": "/news/icasm-hungary-2019/",
    "date": "2019-09-03T06:38:26",
    "content": "AMST-Systemtechnik GmbH has the pleasure to announce its participation at the 67th International Congress of Aviation and Space Medicine 2019 in Debrecen, Hungary from 8–12. September 2019. We are looking forward to welcome you at our booth.",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2019-09-ICASM.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["hungary", "icasm", "amst", "systemtechnik", "gmbh"]
  },
  {
    "title": "AIRPOWER Austria 2019",
    "url": "/news/airpower-austria-2019/",
    "date": "2019-09-02T06:39:31",
    "content": "AMST-Systemtechnik GmbH will be participating in the AIRPOWER19, Austria’s sensational airshow, taking place in Zeltweg, Austria on 6–7 September 2019. AMST will also participate in the Austrian Aviation Technology Days on 4–5 September prior to AIRPOWER19.",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2019-09-Airpower.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["austria", "amst", "will", "september", "airpower"]
  },
  {
    "title": "7th User Congress Debrecen 2019",
    "url": "/news/7th-user-congress-debrecen-2019/",
    "date": "2019-09-01T06:37:00",
    "content": "AMST-Systemtechnik GmbH is participating in the 7th User Congress „Maximising Aircrew Training Capabilities for Civilian and Military Aircraft of the 21st Century“, which takes place 13-16 Sept. 19 in Debrecen, Hungary. We are looking forward to discuss the exciting topics with you.",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2019-09-7th_User_Congress.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["user", "congress", "debrecen", "amst", "systemtechnik"]
  },
  {
    "title": "RHT in Vertical 911 Magazine",
    "url": "/news/rht-in-vertical-911-magazine/",
    "date": "2019-07-02T06:45:06",
    "content": "An article about AMST’s Helicopter Rescue Hoist Trainer has been published in the 2019 Summer Edition of the Vertical 911 Magazine. You can read the article in Flipbook or PDF format.A video accompanying the article is available on Vimeo. Learn more about the Helicopter Rescue Hoist Trainer on the RHT product page.",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2019-07-RHT_Vertical_911.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["article", "vertical", "magazine", "about", "helicopter"]
  },
  {
    "title": "Onshore Helicopter Safety Conference UK 2019",
    "url": "/news/onshore-helicopter-safety-conference-uk-2019/",
    "date": "2019-07-01T06:46:25",
    "content": "AMST announces its participation at the conference “Onshore Helicopter Safety”. The Royal Aeronautical Society’s conference and will take place 3.-4. July in London, United Kingdom. AMST will give two presentations about “Reducing risk with simulation for helicopter operations”. We would like to welcome you there and are looking forward to fruitful discussions about helicopter crew […]",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2019-07-Helicopter_Conference.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["helicopter", "conference", "onshore", "safety", "amst"]
  },
  {
    "title": "RHT Training Germany",
    "url": "/news/rht-training-germany/",
    "date": "2019-06-01T06:47:33",
    "content": "The Bavarian Mountain Rescue currently delivers the first part of a customised training to a European SAR organisation using AMST’s Helicopter Rescue Hoist Trainer (RHT). Goal of the training is to improve hoisting and rescue techniques. Other trainings with the RHT are already scheduled this year for audiences such as special forces, mountain rescue teams, […]",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2019-06-RHT_Training.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["rescue", "training", "mountain", "germany", "bavarian"]
  },
  {
    "title": "ASMA Meeting Las Vegas 2019",
    "url": "/news/asma-meeting-las-vegas-2019/",
    "date": "2019-05-01T06:51:08",
    "content": "AMST Systemtechnik GmbH is participating in the annual AsMA Meeting, which will be held from 5th to 9th May 2019 in Las Vegas. We would be glad to welcome you in the exhibition area at our booth no. 304. See the AsMA website for more information.",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2019-05-ASMA.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["asma", "meeting", "vegas", "amst", "systemtechnik"]
  },
  {
    "title": "HTC Upgrade Asia",
    "url": "/news/htc-upgrade-asia/",
    "date": "2019-04-01T06:52:18",
    "content": "AMST has been awarded another consecutive order from a major Asian customer for upgrading a Human Training Centrifuge. The upgrade includes the latest cockpit technology and Dynamic Flight Simulation, which will significantly enhance operational training. AMST is proud to lift the centrifuge’s fidelity to the next level to make training feel like real flying.",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2019-04-HTC_Upgrade_Asia.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["training", "upgrade", "amst", "centrifuge", "asia"]
  },
  {
    "title": "Final Acceptance Oman",
    "url": "/news/final-acceptance-oman/",
    "date": "2019-03-01T06:53:47",
    "content": "The AIRFOX ASD and the NIGHTFOX NVT have been installed in the brand new prestigious RAFO Aeromedical Centre in Muscat. After installation and operator/maintenance training, the RAFO project directors, pilots and instructors have confirmed successful Final Acceptance on 14 March 2019. We would like to express our gratefulness to the RAFO and AMST team for […]",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2019-03-FAT_OMN.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["rafo", "final", "acceptance", "have", "oman"]
  },
  {
    "title": "HTC UK Opening Ceremony",
    "url": "/news/htc-uk-opening-ceremony/",
    "date": "2019-02-01T06:54:42",
    "content": "The opening ceremony of the High-G Training Facility, a joint project between AMST-Systemtechnik GmbH and Thales UK, took place at RAF Cranwell on 4 February 2019. Chief of Air Staff, Air Chief Marshal Sir Stephen Hillier, tested the capability himself and was deeply impressed. He stated that his test felt like flying a real aircraft […]",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2019-02-HTC_UK.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["opening", "ceremony", "chief", "high", "training"]
  },
  {
    "title": "Factory Acceptance Oman",
    "url": "/news/factory-acceptance-oman/",
    "date": "2018-12-02T06:55:00",
    "content": "The RAFO team has tested the AIRFOX Advanced Spatial Disorientation Trainer and the NIGHTFOX Night Vision Training System at AMST’s headquarters in Austria and signed the Factory Acceptance Protocol without deficiencies. FAT was completed 2 months earlier than contractually agreed. The installation is already in progress. Thanks to the RAFO and AMST team for the […]",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2018-12-FAT_OMN.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["factory", "acceptance", "rafo", "team", "amst"]
  },
  {
    "title": "AIRFOX ASD Workshop Indonesia",
    "url": "/news/airfox-asd-workshop-indonesia/",
    "date": "2018-12-01T06:56:58",
    "content": "AMST-Systemtechnik GmbH was invited to run a workshop for Civil Aviation at the Aeromedical Institute Jakarta to examine the feasibility of using their AIRFOX ASD to demonstrate and train experienced and basic students from the flying academy in Indonesia in December 2018. The 2 days was a mix of theoretical and practical training sessions, the […]",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2018-12-Workshop_IDN.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["airfox", "workshop", "indonesia", "amst", "systemtechnik"]
  },
  {
    "title": "HPO Contract South-East Asia",
    "url": "/news/hpo-contract-south-east-asia/",
    "date": "2018-11-02T06:58:20",
    "content": "A South-East Asian customer awarded his contract for a 12+4 Hypobaric Chamber incl. Rapid Decompression compartment to AMST-Systemtechnik GmbH. This contract shall be completed and handed over until the end of 2019. It is another consecutive order from the same customer, which expresses the great satisfaction with AMST product quality and reliability. Thank you very […]",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2018-11-HPO_Southeast_Asia.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["contract", "south", "east", "customer", "amst"]
  },
  {
    "title": "ICASM Bangkok 2018",
    "url": "/news/icasm-bangkok-2018/",
    "date": "2018-11-01T06:59:16",
    "content": "AMST-Systemtechnik GmbH has the pleasure to announce its participation at the 6th International Congress of Aviation and Space Medicine 2018 in Bangkok, Thailand from 11th to 15th November 2018. We are looking forward to welcome you at our booth.",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2018-11-ICASM.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["bangkok", "icasm", "amst", "systemtechnik", "gmbh"]
  },
  {
    "title": "Helitech Amsterdam 2018",
    "url": "/news/helitech-amsterdam-2018/",
    "date": "2018-10-01T07:00:50",
    "content": "AMST-Systemtechnik GmbH announces its participation at Helitech International, the largest helicopter exhibition in Europe dedicated to helicopter products, parts, accessories and services. The exhibition will take place in Amsterdam, 16.-18. October. We are looking forward to welcome you at our booth J105.",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2018-10-Helitech.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["helitech", "amsterdam", "helicopter", "exhibition", "amst"]
  },
  {
    "title": "AIRFOX ASD Acceptance Bangladesh",
    "url": "/news/airfox-asd-acceptance-bangladesh/",
    "date": "2018-08-01T07:02:20",
    "content": "The AIRFOX ASD with single-seat/two-seat cockpit has been successfully accepted and handed over to Bangladesh Air Force – Aeromedical Institute. The delivery and installation of this Advanced Spatial Disorientation Trainer was done exactly according to the agreed contract schedule. The device is already the 10th ASD installation of a total of 18 Spatial Disorientation Trainers.",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2018-08-AIRFOX_ASD_BGD.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["airfox", "bangladesh", "seat", "installation", "spatial"]
  },
  {
    "title": "New CEO",
    "url": "/news/new-ceo/",
    "date": "2018-07-01T07:03:32",
    "content": "AMST-Systemtechnik GmbH has appointed Mr. Manfred Bauer as Chief Executive Officer effective 1. July 2018 to lead the company through the next phase of growth and innovation. Mr. Richard Schlüsselberger, the company’s founder, retires as CEO but continues to support the AMST Group as a mentor and advisor.",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2018-07-New_CEO.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["amst", "company", "systemtechnik", "gmbh", "appointed"]
  },
  {
    "title": "HPO Upgrade Spain",
    "url": "/news/hpo-upgrade-spain/",
    "date": "2018-06-01T07:04:49",
    "content": "The Spanish Air Force − Centro de Instrucción de Medicina Aeroespacial (CIMA) awarded its contract for the control system repair and upgrade of the recently installed FALCON Hypobaric Chamber to AMST. Recurring issues with the operation and maintenance of the chamber prompted the need for this upgrade. Installation and acceptance has been completed after only […]",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2018-06-HPO_Upgrade_ESP.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["upgrade", "chamber", "spain", "spanish", "force"]
  },
  {
    "title": "Kent Gillingham Award 2018",
    "url": "/news/kent-gillingham-award-2018/",
    "date": "2018-05-01T07:05:43",
    "content": "Lt Col Brian T. Musselman is being honoured with the 2018 Kent K. Gillingham Award for his positive impacts in the field of aerospace physiology. The award was presented by AsMA President Valerie Martindale and Brig.Gen.(rtd) Dr. Erich Rödig (AMST Aeromedical Consultant) during AsMA Honors Night Ceremonies, 10. May 2018.",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2018-05-Gillingham_Award.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["award", "kent", "gillingham", "asma", "brian"]
  },
  {
    "title": "HTC Midlife Upgrade China",
    "url": "/news/htc-midlife-upgrade-china/",
    "date": "2017-12-02T07:06:54",
    "content": "The AMST team successfully completed the mid-life upgrade of the human centrifuge in the Beijing Institute of Aviation Medicine (BIAM). Many thanks to the BIAM team for the excellent cooperation.",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2017-12-HTC_Upgrade_CHN.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["upgrade", "team", "biam", "midlife", "china"]
  },
  {
    "title": "Aeromedical Centre Contract Oman",
    "url": "/news/aeromedical-centre-contract-oman/",
    "date": "2017-12-01T07:08:52",
    "content": "The Royal Air Force of Oman (RAFO) has awarded its contract for a new Aeromedical Centre, consisting of AIRFOX ASD, Hypobaric Chamber and NIGHTFOX Night Vision Training System to AMST. AMST wants to express its gratitude to the RAFO Team for the professional evaluation and discussions during the entire procurement process. We are looking forward […]",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2017-12-AMC_OMN.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["aeromedical", "centre", "contract", "oman", "rafo"]
  },
  {
    "title": "SGW Forum Germany 2017",
    "url": "/news/sgw-forum-germany-2017/",
    "date": "2017-10-01T07:09:52",
    "content": "AMST announces its participation at the Forum „Ausbildung und Ausbildungsmittel Luftbeweglichkeit“, a congress about training systems for military air mobility. The event will take place from 17.–19. October in Celle, Germany. We would like to welcome you at our booth and are looking forward to fruitful discussions about helicopter crew and mission training systems.",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2017-10-SGW_Forum.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["forum", "germany", "about", "training", "systems"]
  },
  {
    "title": "6th User Congress Review",
    "url": "/news/6th-user-congress-review/",
    "date": "2017-09-02T07:11:50",
    "content": "The 6th User Congress took place in Graz, Austria, from 15. to 19. September under the patronage of the Austrian Defence Forces and the Austrian Chamber of Commerce. 89 participants from 27 different nations attended the event. On the 16. and 17. September, 24 excellent lectures focussed on the motto “CLOSE TO REALITY – Advances […]",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2017-09-6th_User_Congress_Review.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["user", "congress", "september", "austrian", "review"]
  },
  {
    "title": "ICASM Rome 2017",
    "url": "/news/icasm-rome-2017/",
    "date": "2017-09-01T07:12:40",
    "content": "AMST-Systemtechnik GmbH has the pleasure to announce its participation at the 65th International Congress of Aviation and Space Medicine 2017 in Rome, Italy from 10.–12. September 2017. We are looking forward to welcome you at our booth.",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2017-09-ICASM.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["rome", "icasm", "amst", "systemtechnik", "gmbh"]
  },
  {
    "title": "AIRFOX DISO Upgrade India",
    "url": "/news/airfox-diso-upgrade-india/",
    "date": "2017-07-01T07:13:38",
    "content": "AMST upgraded the AIRFOX DISO VI installed at the IAM Bangalore in 2004. After successful acceptance of the upgrade, IAF handed over the new system to IAM during the inauguration meeting on 7. July 2017.",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2017-07-AIRFOX_DISO_Upgrade_IND.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["airfox", "diso", "upgrade", "india", "amst"]
  },
  {
    "title": "AIRFOX ASD Contract Bangladesh",
    "url": "/news/airfox-asd-contract-bangladesh/",
    "date": "2017-06-01T07:14:24",
    "content": "The Bangladesh Air Force and AMST signed a contract for an AIRFOX ASD Advanced Spatial Disorientation Trainer with a two-seat cockpit and night vision capability. Instructor training delivered by AMST will help the customer to make the most out of their investment. We thank the Bangladesh Air Force for their trust in our products and […]",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2017-06-AIRFOX_ASD_BGD.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["bangladesh", "airfox", "contract", "force", "amst"]
  },
  {
    "title": "Kent Gillingham Award 2017",
    "url": "/news/kent-gillingham-award-2017/",
    "date": "2017-05-03T16:29:12",
    "content": "Stephen Véronneau, M.D., M.S., received the 2017 Kent K. Gillingham Award for his instrumental role in the establishment of high computing technology at the FAA for studies addressing medically disqualifying pathologies focusing on human safety and spatial disorientation. The award was presented by David P. Gradwell (2016-2017 President of AsMA) and Brig.Gen.(rtd) Dr. Erich Rödig […]",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2017-05-Gillingham_Award.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["award", "kent", "gillingham", "stephen", "received"]
  },
  {
    "title": "IDET Brno 2017",
    "url": "/news/idet-brno-2017/",
    "date": "2017-05-02T16:34:33",
    "content": "AMST-Systemtechnik GmbH has the pleasure to announce its participation at the International Defence and Security Technologies (IDET) 2017 trade fair in Brno, Czech Republic from 31. May – 2. June 2017. We are looking forward to welcome you at the booth of OMNIPOL, our longtime Czech partner. See the IDET website for more information.",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2017-05-IDET.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["idet", "brno", "czech", "amst", "systemtechnik"]
  },
  {
    "title": "WATS Orlando 2017",
    "url": "/news/wats-orlando-2017/",
    "date": "2017-05-01T16:22:18",
    "content": "Early May, the 20th World Aviation Training Summit took place in Orlando, Florida. AMST-Aviation had the pleasure to meet worldwide leading airlines and training organisations, and strengthened the relationship with them. AMST’s UPRT courses attracted major interest and many new customers have asked us to qualify their instructors",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2017-05-WATS.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["orlando", "aviation", "training", "amst", "wats"]
  },
  {
    "title": "LAT Cooperation",
    "url": "/news/lat-cooperation/",
    "date": "2017-04-04T16:37:28",
    "content": "AMST-Aviation and Lufthansa Aviation Training Enter Partnership Agreement Lufthansa Aviation Training, a leading provider of pilot and cabin crew training, and AMST-Aviation signed a partnership agreement in March. The main focus of the collaboration between the two companies will consist of Upset Prevention and Recovery Training (UPRT), which currently plays an increasingly important role in […]",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2017-04-LAT_Cooperation.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["aviation", "training", "amst", "lufthansa", "partnership"]
  },
  {
    "title": "ASMA Denver 2017",
    "url": "/news/asma-denver-2017/",
    "date": "2017-04-03T16:40:27",
    "content": "AMST Systemtechnik GmbH is participating again in the annual AsMA meeting, which will be held from 30. April – 4. May in Denver this year. We would be glad to welcome you in the exhibition area at our booth. See the AsMA website for more information.",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2017-04-ASMA.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["asma", "denver", "amst", "systemtechnik", "gmbh"]
  },
  {
    "title": "CATES Shanghai 2017",
    "url": "/news/cates-shanghai-2017/",
    "date": "2017-04-02T16:42:44",
    "content": "The 7th Chinese Aviation Training & Education Summit took place in Shanghai. AMST-Aviation had the pleasure to update leading Chinese airlines and training organisations about proper implementation of UPRT.",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2017-04-CATES.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["shanghai", "chinese", "aviation", "training", "cates"]
  },
  {
    "title": "UPRT Training China",
    "url": "/news/uprt-training-china/",
    "date": "2017-04-01T16:44:41",
    "content": "AMST-Aviation supports CAAC Early April, AMST had the pleasure to brief the Civil Aviation Administration of China (CAAC) on best practices for implementing Upset Prevention & Recovery Training (UPRT) within the commercial pilot training. CAAC is about to set national standards based on FAA and EASA rules and expressed their thorough intend of being supported […]",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2017-04-UPRT_Training_CHN.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["training", "caac", "uprt", "china", "amst"]
  },
  {
    "title": "HTC UK",
    "url": "/news/htc-uk/",
    "date": "2017-02-02T16:47:21",
    "content": "Thales and AMST Training Pilots to Withstand High G Force whilst Flying Thales has started work on the construction of a state-of-the-art, High-G Training and Test Capability facility that could save the lives of fast jet fighter pilots. Pilots flying the Hawk, Typhoon or new F35 Lighting II aircraft can experience up to 9 g […]",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2017-02-HTC_UK_Construction.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["pilots", "thales", "training", "high", "flying"]
  },
  {
    "title": "AIRFOX ASD Indonesia",
    "url": "/news/airfox-asd-indonesia/",
    "date": "2017-02-01T16:49:04",
    "content": "The AIRFOX ASD (Advanced Spatial Disorientation Trainer) for the Institute of Aerospace Medicine in Jakarta was successfully installed and handed over to the customer. Amongst other features, the highlight is the interchangeable single-seat and two-seat cockpit.",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2017-02-AIRFOX_ASD_IDN.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["airfox", "seat", "indonesia", "advanced", "spatial"]
  },
  {
    "title": "HTC UK Breaking Ground Ceremony",
    "url": "/news/htc-uk-breaking-ground-ceremony/",
    "date": "2017-01-01T16:52:15",
    "content": "On 12th January 2017, partners in the delivery of the High-G Training and Test Capability met at RAF Cranwell for a ‚breaking ground‘ ceremony, marking a key milestone in the programme to deliver state-of-the-art training for all future Royal Navy and RAF fast jet pilots.",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2017-01-HTC_UK_Breaking_Ground.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["breaking", "ground", "ceremony", "training", "january"]
  },
  {
    "title": "UPRT Instructor Qualification Course",
    "url": "/news/uprt-instructor-qualification-course/",
    "date": "2016-12-03T16:53:32",
    "content": "The AMST UPRT instructor qualification course is a success story. Instructors of more than 18 international airlines and ATOs successfully completed the efficient and effective training course.",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2016-12-UPRT_Course.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["course", "uprt", "instructor", "qualification", "amst"]
  },
  {
    "title": "AIRFOX ASD Delivery Indonesia",
    "url": "/news/airfox-asd-delivery-indonesia/",
    "date": "2016-12-02T16:54:57",
    "content": "AMST delivered an AIRFOX ASD (Advanced Spatial Disorientation Trainer) to the Institute of Aerospace Medicine in Jakarta after only 4 months of production. The installation, training and final acceptance will be mid-February 2017.",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2016-12-AIRFOX_ASD_IDN.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["airfox", "delivery", "indonesia", "amst", "delivered"]
  },
  {
    "title": "Psychological Test System Germany",
    "url": "/news/psychological-test-system-germany/",
    "date": "2016-12-01T16:56:29",
    "content": "A newly developed psychological test system for hypoxia demonstration was accepted by the German MOD in December 2016. The system allows for computerised cognitive tests of trainees during training in the hypobaric chamber. The tests help to recognise the effects of hypoxia on cognitive abilities.",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2016-12_PSS_GER.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["system", "psychological", "test", "hypoxia", "cognitive"]
  },
  {
    "title": "Airshow China 2016",
    "url": "/news/airshow-china-2016/",
    "date": "2016-11-02T16:57:50",
    "content": "AMST presented their products and services at the 11th China International Aviation & Aerospace Exhibition held from 1st to 6th November at Zhuhai, Province Guangdong.",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2016-11-Airshow_CHN.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["china", "airshow", "amst", "presented", "their"]
  },
  {
    "title": "ICASM New Dehli 2016",
    "url": "/news/icasm-new-dehli-2016/",
    "date": "2016-11-01T16:59:16",
    "content": "From 27th to 10th November, AMST attended the ICASM meeting in the new Aero City in New Delhi, India. It was an excellently organised congress with many interesting lectures. The evening events with their folklore displays were full of typical Indian music and dancing.",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2016-11-ICASM.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["icasm", "with", "dehli", "november", "amst"]
  },
  {
    "title": "AIRFOX DISO Upgrade Contract India",
    "url": "/news/airfox-diso-upgrade-contract-india/",
    "date": "2016-10-03T17:00:48",
    "content": "End of October 2016, IAF and AMST signed an upgrade contract for the three AIRFOX DISO spatial disorientation trainers installed at Bangalore (2004), Hyderabad, and Hindan (2009). The upgrade will lift the 3 AIRFOX DISOs to the same technology level. Final Acceptance will be end of September 2017.",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2016-10_AIRFOX_DISO_IND.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["airfox", "upgrade", "diso", "contract", "will"]
  },
  {
    "title": "Optimal Motion Cueing at FSEMC 2016",
    "url": "/news/optimal-motion-cueing-at-fsemc-2016/",
    "date": "2016-10-02T17:02:20",
    "content": "AMST introduced their brand new OMC (Optimal Motion Cueing) technology to the FSEMC (Flight Simulator Engineering and Maintenance Conference) auditorium. This technology will replace the classical wash-out cueing within the next years and improve simulator experience substantially.",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2016-10-FSEMC.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["cueing", "optimal", "motion", "fsemc", "technology"]
  },
  {
    "title": "Japan International Aerospace Exhibition 2016",
    "url": "/news/japan-international-aerospace-exhibition-2016/",
    "date": "2016-10-01T17:03:07",
    "content": "AMST attended the Japan International Aerospace Exhibition. The company presented its Virtual Terrain Image Generation System (VTIGS) together with ITOCHU. VTIGS takes night vision training to the next level. Many thanks to the ITOCHU team for their great support and perfect organisation. Thanks also go to the instructor Douglas Vine with his immense experience in […]",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2016-10-Exhibition_JPN.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["japan", "international", "aerospace", "exhibition", "vtigs"]
  },
  {
    "title": "Pilot Selection System Myanmar",
    "url": "/news/pilot-selection-system-myanmar/",
    "date": "2016-09-03T17:04:33",
    "content": "AMST delivered an advanced pilot selection system to Myanmar mid of June. The final acceptance took place in September. The solution allows for pilot selection in 2 stages. In stage 1, subjects do tests in a classroom with 8 test stations linked to a server. In stage 2, subjects are tested on a screening simulator […]",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2016-09-PSS_MMR.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["pilot", "selection", "system", "myanmar", "stage"]
  },
  {
    "title": "ICAO UPRT Workshop",
    "url": "/news/icao-uprt-workshop/",
    "date": "2016-09-02T17:05:39",
    "content": "AMST attended the ICAO UPRT (Upset Prevention and Recovery Training) workshop in Toulouse/France, hosted by Airbus. Worldwide experts exchanged their ideas on how to best implement actual UPRT rules within their current training. The common sense was that proper instructor qualification is crucial.",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2016-09-ICAO_UPRT_Workshop.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["uprt", "icao", "workshop", "training", "their"]
  },
  {
    "title": "HTC Upgrade Germany",
    "url": "/news/htc-upgrade-germany/",
    "date": "2016-09-01T17:06:53",
    "content": "AMST completed the upgrade of the human training centrifuge in Königsbrueck, near Dresden. The upgrade of the control system included a software upgrade to MS Windows 10 operating system. Additionally, the DC motor operating since 1985 was overhauled.",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2016-09-HTC_Upgrade_GER.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["upgrade", "system", "operating", "germany", "amst"]
  },
  {
    "title": "APATS Singapore 2016",
    "url": "/news/apats-singapore-2016/",
    "date": "2016-08-01T17:08:22",
    "content": "This year’s Asian Pacific Aviation Training Symposium took place in the marvellous Raffles City Convention Centre in downtown Singapore. AMST took this chance to also introduce UPRT to the emerging Asian market.",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2016-08-APATS_SGP.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["singapore", "asian", "took", "apats", "year"]
  },
  {
    "title": "AIRFOX DISO Training Austria",
    "url": "/news/airfox-diso-training-austria/",
    "date": "2016-07-01T17:09:32",
    "content": "AMST welcomed a delegation from Greece at its headquarters for an operator and maintenance training for the AIRFOX DISO spatial disorientation trainer.",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2016-07-AIRFOX_DISO_Training.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["airfox", "diso", "training", "austria", "amst"]
  },
  {
    "title": "Provincial Government Visit Austria",
    "url": "/news/provincial-government-visit-austria/",
    "date": "2016-06-03T17:11:04",
    "content": "Mag. Dr. Michael Strugl, a member of AMST’s provincial government, visited the company for a briefing on the research and development activities, in particular on the new driving simulator. Mr. Strugl is responsible for economy, energy, sport and regional development, and Europe. From left to right: Rainer and Richard Schluesselberger jun, Mr. Strugl, Richard Schluesselberger […]",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2016-06-Government_Visit_AUT.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["strugl", "provincial", "government", "development", "richard"]
  },
  {
    "title": "SD and NV Training Austria",
    "url": "/news/sd-and-nv-training-austria/",
    "date": "2016-06-02T17:53:01",
    "content": "AMST welcomed a group of pilots from Venezuela at its headquarters for a combined spatial disorientation and night vision training. It was the 11th group of pilots coming to AMST for this training lead by our experienced instructors Douglas Vine and Christian Plonka.",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2016-06-SD_NV_Training_AUT.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["training", "amst", "group", "pilots", "austria"]
  },
  {
    "title": "RHT Visit Germany",
    "url": "/news/rht-visit-germany/",
    "date": "2016-06-01T17:53:56",
    "content": "On 3. June 2016, AMST’s employees visited the rescue hoist training facility of the Bavarian Mountain Rescue in Bad Toelz, Germany. During the event, our colleagues saw the fruits of their work in action. And of course they took the opportunity to make a flight with AMST’s newly developed Recue Hoist Trainer (RHT).",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2016-06-RHT_Visit_GER.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["germany", "amst", "rescue", "hoist", "visit"]
  },
  {
    "title": "NIGHTFOX VTIGS at ITEC London 2016",
    "url": "/news/nightfox-vtigs-at-itec-london-2016/",
    "date": "2016-05-02T17:54:54",
    "content": "AMST presented their newly developed Virtual Terrain Image Generation System (VTIGS) at the ITEC in London. The VTIGS is a computer-based night vision training system with an extremely high-resolution terrain database.",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2016-05-ITEC.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["vtigs", "itec", "london", "terrain", "system"]
  },
  {
    "title": "Rescue Hoist Training Facility Opening Germany",
    "url": "/news/rescue-hoist-training-facility-opening-germany/",
    "date": "2016-05-01T17:55:52",
    "content": "The Bavarian interior minister Joachim Hermann reopened the modernised and extended rescue hoist training facility of the Bavarian Mountain Rescue on 8. May 2016. One of the highlights of the event in Bad Toelz was the new Rescue Hoist Trainer (RHT), which is designed, manufactured and donated by AMST.",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2016-05-RHT_Opening_GER.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["rescue", "hoist", "training", "facility", "bavarian"]
  },
  {
    "title": "WATS Orlando 2016",
    "url": "/news/wats/",
    "date": "2016-04-02T17:57:08",
    "content": "The WATS 2016 (World Aviation Training Symposium) took place 19th–21st April in the Rosen Shingle Creek Resort in Orlando, FL. AMST was participating and strengthening its network in the civil aviation domain.",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2016-04-WATS.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["wats", "orlando", "aviation", "world", "training"]
  },
  {
    "title": "Kent Gillingham Award 2016",
    "url": "/news/kent-gillingham-award-2016/",
    "date": "2016-04-01T17:58:04",
    "content": "From 24th to 28th April 2016, AMST attended the ASMA meeting in Atlantic City. On 28th April the Kent G. Gillingham Award was given to Mr. David G. Schall, MD, MPH, for his significant contributions in the fields of spatial disorientation and situational awareness related to flight. The award sponsored by AMST was handed over […]",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2016-04-Gillingham_Award.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["award", "kent", "gillingham", "april", "amst"]
  },
  {
    "title": "HTC UK Contract",
    "url": "/news/htc-uk-contract/",
    "date": "2016-03-02T18:00:11",
    "content": "Thales UK and AMST were awarded the contract for a human training centrifuge for the RAF from DE&S. Thales UK is responsible for the overall project including building and operation. AMST delivers the human training centrifuge. The centrifuge will be equipped with cockpits for Typhoon, Hawk MK II and F-35. The final acceptance will be […]",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2016-03-HTC_UK_Contract.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["centrifuge", "contract", "thales", "amst", "human"]
  },
  {
    "title": "EST Acceptance Vietnam",
    "url": "/news/est-acceptance-vietnam/",
    "date": "2016-03-01T18:01:07",
    "content": "AMST completed the installation of the basic Ejection Seat Trainer (EST) at the Vietnamese Air Force Hospital in Hanoi on schedule. The customer accepted the system without any deficiencies or defects.",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2016-03-EST_VNM.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["acceptance", "vietnam", "amst", "completed", "installation"]
  },
  {
    "title": "NIGHTFOX VTIGS Czech Republic",
    "url": "/news/nightfox-vtigs-czech-republic/",
    "date": "2016-02-01T18:02:14",
    "content": "AMST handed over the Virtual Terrain Image Generation System (VTIGS) to the Institute of Aviation Medicine in Prague. VTIGS is a computer-based system which takes night vision training to the next level.",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2016-02-NIGHTFOX_VTIGS_CZE.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["vtigs", "system", "nightfox", "czech", "republic"]
  },
  {
    "title": "PC-21 Saudi-Arabia",
    "url": "/news/pc-21-simulators-saudi-arabia/",
    "date": "2016-01-01T18:03:37",
    "content": "The final acceptance for the PC-21 simulators for Saudi Arabia was successfully completed end of January 2016.",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2016-01-PC21_SAU.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["saudi", "arabia", "final", "acceptance", "simulators"]
  },
  {
    "title": "EST Visit Vietnam",
    "url": "/news/est-visit-vietnam/",
    "date": "2015-12-02T05:09:02",
    "content": "A team of the Vietnamese Air Force Hospital in Hanoi visited AMST in December 2015 for the FAT of the Ejection Seat Trainer (EST). AMST also delivered the first part of the operator and maintenance training.",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2015-12-EST_Visit_VNM.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["amst", "visit", "vietnam", "team", "vietnamese"]
  },
  {
    "title": "HPO Acceptance Vietnam",
    "url": "/news/hpo-acceptance-vietnam/",
    "date": "2015-12-01T05:10:41",
    "content": "Shortly before Christmas, the hypobaric chamber installed at the military hospital in Hanoi was fully accepted.",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2015-12-HPO_VNM.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["acceptance", "vietnam", "shortly", "before", "christmas"]
  },
  {
    "title": "ITSEC Orlando 2015",
    "url": "/news/itsec-orlando-2015/",
    "date": "2015-11-01T05:12:24",
    "content": "In November 2015, AMST participated in the ITSEC exhibition in Orlando, Florida. AMST presented the newly developed Virtual Terrain Image Generation System (VTIGS) for the first time to the public. The system takes night vision training to the next level.",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2015-11-ITSEC.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["itsec", "orlando", "amst", "system", "november"]
  },
  {
    "title": "5th User Congress Review",
    "url": "/news/5th-user-congress-review/",
    "date": "2015-09-01T05:13:35",
    "content": "AMST held the 5th user congress in cooperation with the Centrum voor Mens en Luchtvaart (CML) in Soesterberg, The Netherlands. More than 100 people from over 20 nations visited the event. The lectures of the two-day programme gave many interesting insights into the latest developments in aerospace medicine and pilot training. We thank CML’s Col. […]",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2015-09-5th_User_Congress_Review.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["user", "congress", "review", "amst", "held"]
  },
  {
    "title": "ICASM Bangalore 2015",
    "url": "/news/icasm-bangalore-2015/",
    "date": "2015-08-02T05:16:26",
    "content": "In late August 2015, AMST attended the congress of the Indian Society for Space Medicine (ISAM) in Bangalore.",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2015-08-ICASM.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["bangalore", "icasm", "late", "august", "amst"]
  },
  {
    "title": "DESDEMONA Midlife Upgrade The Netherlands",
    "url": "/news/desdemona-midlife-upgrade-the-netherlands/",
    "date": "2015-08-01T05:17:38",
    "content": "AMST did a midlife upgrade of its revolutionary DESDEMONA simulator installed at TNO/DESDEMONA BV in Soesterberg. The upgrade improves the performance of DESDEMONA and updates the safety system to the new European safety standards.",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2015-08-DESDEMONA_Upgrade_NLD.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["desdemona", "upgrade", "midlife", "safety", "netherlands"]
  },
  {
    "title": "HPO Factory Acceptance Vietnam",
    "url": "/news/hpo-factory-acceptance-vietnam/",
    "date": "2015-07-01T05:18:54",
    "content": "AMST passed the FAT (Factory Acceptance Test) for the hypobaric chamber successfully and on schedule without deficiencies or defects in June 2015.",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2015-07-HPO_VNM.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["factory", "acceptance", "vietnam", "amst", "passed"]
  },
  {
    "title": "NHTS Handover Austria",
    "url": "/news/nhts-handover-austria/",
    "date": "2015-06-02T05:20:09",
    "content": "AMST handed over the mobile Normobaric Hypoxia Training System to the Austrian Ski Team organisation on 15. June 2015. AMST developed the system for highly effective sports training, regeneration training after sporting accidents, hypoxia research, and pilot training.",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2015-06-NHTS_AUT.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["training", "amst", "hypoxia", "system", "nhts"]
  },
  {
    "title": "Sea Survival Training Center Pre-SAT Saudi-Arabia",
    "url": "/news/sea-survival-training-centre-pre-sat-saudi-arabia/",
    "date": "2015-06-01T05:21:51",
    "content": "In June, the pre-SAT for the Sea Survival Training Center for the Royal Saudi Navy was completed.",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2015-06-UWETS_SAU.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["survival", "training", "center", "saudi", "arabia"]
  },
  {
    "title": "Kent Gillingham Award 2015",
    "url": "/news/kent-gillingham-award-2015/",
    "date": "2015-05-02T05:23:10",
    "content": "AMST attended the ASMA meeting in Orlando, Florida from May 10th to 12th. The Kent Gillingham Award sponsored by AMST went to Ms. Mica Endsley, Ph.D., Chief Scientist US Air Force. Brig. Gen. (rtd) Dr. Erich Roedig handed over the award in the name of AMST.",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2015-05-Gillingham_Award.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["award", "amst", "kent", "gillingham", "attended"]
  },
  {
    "title": "ASMA Orlando 2015",
    "url": "/news/asma-orlando-2015/",
    "date": "2015-05-01T05:24:14",
    "content": "AMST-Systemtechnik GmbH has the pleasure to announce its participation in the upcoming 86th Annual Scientific Meeting at the Walt Disney World Dolphin Hotel in Orlando, Florida from 10th – 14th May 2015. We are looking forward to welcome you at our booth #406. Use this opportunity to receive first-hand information about the latest developments in […]",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2015-05-ASMA.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["orlando", "asma", "amst", "systemtechnik", "gmbh"]
  },
  {
    "title": "EST Site Acceptance Saudi-Arabia",
    "url": "/news/est-site-acceptance-saudi-arabia/",
    "date": "2015-04-02T05:25:46",
    "content": "The Advanced Ejection Seat Trainer has successfully passed the Site Acceptance Test in April 2015 at the King Abdulaziz Airbase in Dhahran. The customer was impressed about the high quality and performance of the product. Many thanks to the project manager and the entire team who have done a great job.",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2015-04-EST_SAU.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["site", "acceptance", "saudi", "arabia", "advanced"]
  },
  {
    "title": "ITEC Prague 2015",
    "url": "/news/itec-prague-2015/",
    "date": "2015-04-01T05:26:48",
    "content": "This year AMST-Systemtechnik GmbH is attending at ITEC in Prague. AMST will present the new developed Virtual Terrain Image Generation System (VTIGS). The VTIGS can be tested in full functionality. We are looking forward to welcome you at our booth Nr. 3A-426.",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2015-04-ITEC.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["itec", "prague", "amst", "vtigs", "year"]
  },
  {
    "title": "Psychological Test System Vietnam",
    "url": "/news/psychological-test-system-vietnam/",
    "date": "2015-03-01T05:28:32",
    "content": "AMST-Systemtechnik GmbH received a contract from the Austrian Company VAMED Engineering GmbH & CO KG in December 2013 for a psychological test system. The end customer is the Hang Khong Hospital in Hanoi, Vietnam. The final installation, training and acceptance took place in March 2015.",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2015-03-PSS_VNM.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["psychological", "test", "system", "vietnam", "gmbh"]
  },
  {
    "title": "AIRFOX ASD Acceptance Spain",
    "url": "/news/airfox-asd-acceptance-spain/",
    "date": "2014-12-05T05:30:14",
    "content": "In December 2014 AMST-Systemtechnik GmbH passed the Final Acceptance Test of the AIRFOX ASD for the Centro de Instrucción de Medicina Aeroespacial (CIMA) in Madrid. The professional cooperation between all parties involved ensured the success of this project. Many Thanks to the Spanish and the AMST project team for their outstanding work.",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2014-12-AIRFOX_ASD_ESP.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["airfox", "acceptance", "amst", "project", "spain"]
  },
  {
    "title": "EST Factory Acceptance Saudi-Arabia",
    "url": "/news/est-factory-acceptance-audi-arabia/",
    "date": "2014-12-04T05:31:47",
    "content": "The Advanced Ejection Seat Trainer for the Kingdom of Saudi Arabia Armed Forces Medical Services Directorate (KSA AFMSD) in Dhahran has successfully passed the Factory Acceptance Test in December 2014 at AMST-Systemtechnik GmbH. The customer was impressed about the high quality and performance of the product.",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2014-04-EST_SAU.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["factory", "acceptance", "saudi", "arabia", "advanced"]
  },
  {
    "title": "DESDEMONA UPRT Article in CAT Journal",
    "url": "/news/desdemona-uprt-article-in-cat-journal/",
    "date": "2014-12-03T05:32:50",
    "content": "DESDEMONA – Research and Innovation Do Pay Off Postholder, trainings director and fleet chief pilots of a VVIP flight operator based in the Gulf assessed the UPRT (Upset Prevention and Recovery Training) course on Desdemona. The syllabus is based on the scientific outcome of the EC-funded multi-national research project SUPRA (Simulation of Upset Recovery in […]",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2014-12-DESDEMONA_CAT_Journal.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["desdemona", "uprt", "research", "based", "upset"]
  },
  {
    "title": "RHT Visit Germany",
    "url": "/news/rht-visit-germany-2/",
    "date": "2014-12-02T05:33:55",
    "content": "On Sunday 7th December the delegates of the 4th SD & NV Training Workshop had an optional programme to visit the BERGWACHT BAYERN – Bavarian Mountain Rescue Service – Bad Tölz, Germany, where helicopter rescue simulation is carried from Hoisting to casualty evacuation. Many thanks to the whole team for both the introduction and the […]",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2014-12-RHT_VISIT_GER.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["visit", "germany", "rescue", "sunday", "december"]
  },
  {
    "title": "SD &#038; NV Training Workshop Salzburg 2014",
    "url": "/news/sd-nv-training-workshop-salzburg-2014/",
    "date": "2014-12-01T05:35:00",
    "content": "The 4th SD & NV Training Workshop was held in the Sheraton Hotel, Salzburg from the 4th – 7th December 2014. This event attracted 80 delegates from 22 countries and this year’s theme was “The Human Factor: Enhancing human performance through Simulation”. We would like to thank the delegates and sponsors for their excellent support […]",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2014-12-SD_NV_Workshop_AUT.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["training", "workshop", "salzburg", "delegates", "human"]
  },
  {
    "title": "HPO Site Acceptance Myanmar",
    "url": "/news/hpo-site-acceptance-myanmar/",
    "date": "2014-11-01T05:37:20",
    "content": "The Site Acceptance Test (SAT) of the Hypobaric Chamber (HPO) for the Myanmar Civil Aviation Authority (CAA) was successfully performed in November 2014. The client was extremely pleased with the way of the project handling and the functionality and operation of the high altitude chamber. Many thanks to the project manager and the entire team […]",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2014-11-HPO_MMR.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["site", "acceptance", "myanmar", "chamber", "project"]
  },
  {
    "title": "NIGHTFOX NVTS Denmark",
    "url": "/news/nightfox-nvts-denmark/",
    "date": "2014-10-04T05:38:28",
    "content": "AMST-Systemtechnik GmbH has passed the Site Acceptance Test (SAT) for the first project in Denmark. AMST delivered a Night Vision Training System (NVTS), which was set up in the Flyvestation Skalstrup in Gadstrup. We would like to thank the customer for their excellent cooperation and the project team for the perfect project execution.",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2014-10-NIGHTFOX_NVTS_DNK.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["project", "nvts", "denmark", "amst", "nightfox"]
  },
  {
    "title": "PPBT Final Acceptance Saudi-Arabia",
    "url": "/news/ppbt-final-acceptance-saudi-arabia/",
    "date": "2014-10-03T05:39:33",
    "content": "The Positive Pressure Breathing Trainer – PPB-T has successfully passed the Final Acceptance Test in October 2014. Franz Pflug and his team managed this project within a period of 12 months. This has been the first contract with KSA AFMSD, the team was impressed about the quality, performance and in-time delivery of AMST.",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2014-10-PPBT_SAU.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["final", "acceptance", "team", "ppbt", "saudi"]
  },
  {
    "title": "Barany Chairs Saudi-Arabia",
    "url": "/news/barany-chairs-saudi-arabia/",
    "date": "2014-10-02T05:40:26",
    "content": "Two Barany Chairs have successfully passed the Final Acceptance Test in October 2014. Franz Pflug and his team managed this customer tailored project within a period of 12 months. This has been the first contract with KSA AFMSD, the team was impressed about the quality and performance as well as the in-time delivery of AMST.",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2014-10_Barany_Chair_SAU.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["barany", "chairs", "team", "saudi", "arabia"]
  },
  {
    "title": "ICASM Mexico City 2014",
    "url": "/news/icasm-mexico-city-2014/",
    "date": "2014-10-01T05:41:26",
    "content": "AMST-Systemtechnik GmbH has the pleasure to announce its participation in the upcoming 62nd International Congress of Aviation and Space Medicine (ICASM) 2014 in Mexico City from 12th – 16th October 2014. The theme will be “Human Technology Innovations and Aerospace Environment – A Never Ending Challenge”. We are looking forward to welcome you at our […]",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2014-10-ICASM.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["icasm", "mexico", "city", "amst", "systemtechnik"]
  },
  {
    "title": "ISAM Bangalore 2014",
    "url": "/news/isam-bangalore-2014/",
    "date": "2014-09-01T05:43:12",
    "content": "The 54th Annual Conference of the Indian Society of Aerospace Medicine (ISAM) was held at the IAM, IAF Bangalore from 22–24 August 2014. The annual ISAM conference was an important event to discuss the contemporary aeromedical concerns amongst the fraternity assembling from not only India, but also foreign countries. It was an event with a […]",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2014-09-ISAM.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["isam", "bangalore", "annual", "conference", "event"]
  },
  {
    "title": "PPBT Factory Acceptance Saudi-Arabia",
    "url": "/news/ppbt-factory-acceptance-saudi-arabia/",
    "date": "2014-06-03T05:44:48",
    "content": "The Positive Pressure Breathing Trainer – PPB-T for the Royal Saudi Arabia Armed Forces Medical Services Department (SAAFMSD) at Dhahran has successfully passed the Factory Acceptance Test (FAT) in June 2014. Franz Pflug and his team managed the project within a period of 8 months. The FAT team was heavily impressed about the quality and […]",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2014-06-PPBT_SAU.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["factory", "acceptance", "saudi", "arabia", "team"]
  },
  {
    "title": "HPO Factory Acceptance Myanmar",
    "url": "/news/hpo-factory-acceptance-myanmar/",
    "date": "2014-06-02T05:45:49",
    "content": "The Myanmar CAA and AMST completed the FAT for the HPO with great success. Aung San Win, Head of CAA Delegation and Richard Schlüsselberger, AMST CEO emphasised in their speeches the outstanding teamwork headed by Rudolf Gann, Project Manager. The HPO has 6+2 seats, is round shaped, designed and manufactured according to PVHO/ASME Standards and […]",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2014-06-HPO_MMR.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["myanmar", "amst", "factory", "acceptance", "completed"]
  },
  {
    "title": "Bronze Pegasus for AMST",
    "url": "/news/bronze-pegasus-for-amst/",
    "date": "2014-06-01T05:46:56",
    "content": "The AMST-Systemtechnik GmbH has received the Bronze Pegasus in June 5, 2014 in the category of medium-sized enterprises – “the strong backbone”. At the gala night of the economy in the Linz Bruckner house, more than 600 guests celebrated the best companies in Upper Austria in 2014. Dr. Gerhard Emsenhuber, the CFO & COO of […]",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2014-06-AMST_Pegasus.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["bronze", "pegasus", "amst", "systemtechnik", "gmbh"]
  },
  {
    "title": "Kent Gillingham Award 2014",
    "url": "/news/kent-gillingham-award-2014/",
    "date": "2014-05-01T05:48:04",
    "content": "This year’s AsMA was in San Diego in a real “Latino Flavoured” atmosphere. Derek Knight, M.D. received the Kent K. Gillingham Award from Brig.Gen.(rtd) Dr. Erich Rödig in recognition of his substantial contributions to SD countermeasures research and training. The traditional AMST reception was arranged at “La Fiesta” together with friends from more than 15 […]",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2014-05-Gillingham_Award.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["kent", "gillingham", "award", "year", "asma"]
  },
  {
    "title": "Pilot Selection System Austria",
    "url": "/news/pilot-selection-system-austria/",
    "date": "2014-04-01T05:49:59",
    "content": "AMST received a contract for a simulator for selection of Military pilots. The simulator has three aircraft models (fast jet, trainer aircraft and helicopter), flight controls, instrument and visual displays, terrain database and a hexapod motion system. Final Acceptance was 25th April 2014. We would like to thank the Austria MOD for their confidence in […]",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2014-04_PSS_AUT.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["selection", "system", "austria", "simulator", "aircraft"]
  },
  {
    "title": "AIRFOX ASD Myanmar",
    "url": "/news/airfox-asd-myanmar/",
    "date": "2014-02-02T05:51:04",
    "content": "Beginning of February 2014 AMST passed the Final Acceptance of the AIRFOX ASD. During installation we had an excellent support from the staff of the customer and we would like to express our grateful thanks to all involved personnel from Myanmar.",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2014-02-AIRFOX_ASD_MMR.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["airfox", "myanmar", "beginning", "february", "amst"]
  },
  {
    "title": "NIGHTFOX NVTS Contract Denmark",
    "url": "/news/nightfox-nvts-contract-denmark/",
    "date": "2014-02-01T05:51:56",
    "content": "Danish Defence Acquisition and Logistics Organisation – DALO has awarded the contract for a Night Vision Training System NIGHTFOX NVTS to AMST. We would like to take this opportunity to thank DALO for this order and its confidence in AMST.",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2014-02-NIGHTFOX_NVTS_DNK.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["nightfox", "nvts", "contract", "dalo", "amst"]
  },
  {
    "title": "Sea Survival &#038; Rescue Training Equipment Saudi-Arabia",
    "url": "/news/sea-survival-rescue-training-equipment-saudi-arabia/",
    "date": "2013-10-04T05:53:27",
    "content": "In October 2013 AMST passed the Factory Acceptance Test (FAT) of the Sea Survival & Rescue training equipment successfully. The Royal Saudi Naval Forces delegation was very delighted about the equipment, that will be installed within the first half of 2014.",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2013-10-UWETS_SAU.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["equipment", "survival", "rescue", "training", "saudi"]
  },
  {
    "title": "4th User Congress Review",
    "url": "/news/4th-user-congress-review/",
    "date": "2013-10-03T05:54:37",
    "content": "The 4th User Congress was held in the Westin Bellevue Hotel, Dresden from the 11th to 15th October 2013. The event was attended by more than 70 delegates from 26 nations which globally meant four of the five continents were represented from Australia, Japan to both North and South America.",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2013-10-4th_User_Congress_Review.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["user", "congress", "review", "held", "westin"]
  },
  {
    "title": "EST Saudi-Arabia",
    "url": "/news/est-saudi-arabia/",
    "date": "2013-10-02T05:55:31",
    "content": "The Royal Saudi Arabia Armed Forces Medical Services Department (SAAFMSD) has decided for the AMST’s Ejection Procedure Trainer which is a combination of a Flight Simulator and an Ejection Seat Trainer. The contract also includes two Barany chairs for basic disorientation demonstration as well as the newly developed Positive Pressure Breathing trainer.",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2013-10-EST_SAU.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["trainer", "saudi", "arabia", "ejection", "royal"]
  },
  {
    "title": "AIRFOX ASD FNPT Qualification",
    "url": "/news/airfox-asd-fnpt-qualification/",
    "date": "2013-10-01T05:56:45",
    "content": "AIRFOX ASD – Advanced Spatial Disorientation Trainer – received the Flight Simulation Training Device Qualification Certificate “AT – FNPT – 1061” from Austro Control GmbH (ACG).",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2013-10-AIRFOX_ASD_Qualification.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["airfox", "fnpt", "qualification", "advanced", "spatial"]
  },
  {
    "title": "AIRFOX DISO Upgrade UK",
    "url": "/news/airfox-diso-upgrade-uk/",
    "date": "2013-09-02T05:58:19",
    "content": "In 2013 AMST received a contract for the upgrade of their two AIRFOX DISOs, installed at Royal Air Force Centre of Aviation Medicine. It comprises the installation of a screen with 73° by 43° FOV, a projector with IR capability and flight controls equipped with a control loading system. In the centre of the screen […]",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2013-09-AIRFOX_DISO_Upgrade_UK.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["with", "airfox", "upgrade", "centre", "screen"]
  },
  {
    "title": "Pilot Selection System Contract Austria",
    "url": "/news/pilot-selection-system-contract-austria/",
    "date": "2013-09-01T05:59:23",
    "content": "The Federal Ministry of Defence and Sports awarded a contract for a motion based pilot selection simulator for screening and selection of pilots. This product is the first of its kind developped by AMST. The simulator has a 6 DOF motion platform. One of the key requirements was the transportability of the system in order […]",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2013-09_PSS_AUT.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["selection", "pilot", "system", "contract", "motion"]
  },
  {
    "title": "AIRFOX ASD Thailand",
    "url": "/news/airfox-asd-thailand/",
    "date": "2013-08-01T06:00:23",
    "content": "The RTAF Institute of Aviation Medicine received their new AIRFOX ASD. In addition to the customised high-resolution database covering the whole area of Thailand, including six high detailed airports, the RTAF also received the aircraft model for PC-9 and the helicopter model Bell 412.",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2013-08-AIRFOX_ASD_THA.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["airfox", "thailand", "rtaf", "received", "high"]
  },
  {
    "title": ":envifuge Handover Germany",
    "url": "/news/envifuge-handover-germany/",
    "date": "2013-07-01T06:01:32",
    "content": "Richard Schlüsselberger sen. proudly handed over the :enviFuge, the Microgravity Short Arm Human Centrifuge, to Prof. Dr. Rupert Gerzer on 5th of July 2013 under the presence of many international austronauts and specially invited VIP´s.",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2013-07-envifuge_GER.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["envifuge", "handover", "germany", "richard", "proudly"]
  },
  {
    "title": "Turbo for Elisa",
    "url": "/news/turbo-for-elisa/",
    "date": "2013-06-01T06:02:49",
    "content": "More than 30 flat-spin rotations Marc “Turbo” Grüne wanted to create, 85 are then made. So “Turbo” goes into the Guinness Book of World Records. He has set up the first man to the world record in Tailspin. With the “Turbo für Elisa” donations for a charity were collected, which helps seriously ill children. A […]",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2013-06-Turbo_Elisa.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["turbo", "elisa", "world", "more", "than"]
  },
  {
    "title": "Kent Gillingham Award 2013",
    "url": "/news/kent-gillingham-award-2013/",
    "date": "2013-05-01T06:06:25",
    "content": "The AsMA presented the Kent Gillingham Award sponsered by AMST to Royce Moser, Jr., M.D., M.P.H., in recognition of his contributions to prevention of aircraft accidents due to Spatial Disorientation (SD). As a result, the secretary directed installation of the Automatic Ground Collision Avoidance System which will help to prevent SD accidents in Air Force […]",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-AM-2013-05-Gillingham_Award.jpg",
    "categories": ["news-aerospace-medicine"],
    "tags": ["kent", "gillingham", "award", "accidents", "asma"]
  },
  {
    "title": "VISIM IG Level D Qualification",
    "url": "news/visim-ig-level-d-qualification/",
    "date": "2019-10-01T07:09:06",
    "content": "We are excited to inform about the successful integration of VISIM Image Generator into AMST`s A320 NEO Full Flight Simulator (White Tail). The simulator was successfully qualified to EASA CS-FSTD(A)-Issue 2 Level D standard. VISIM is a top-notch image generation solution capable of rendering high fidelity airports placed on a whole earth model. The integrated […]",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-VS-2019-10_VISIM_Qualification.jpg",
    "categories": ["news-visual-systems"],
    "tags": ["visim", "level", "image", "simulator", "qualification"]
  },
  {
    "title": "AMST at WATS 2022",
    "url": "/news/amst-at-wats-2022/",
    "date": "2022-04-01T17:13:00",
    "content": "Meet AMST at WATS 2022 3-5 May in Orlando. Come by our booth 204 to have a chat about Innovation in Simulation, a coffee and a tasty Dutch Stroopwafel! We are looking forward to meeting you!",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2022/07/AMST-News-CA-2022-05-01_WATS.jpg",
    "categories": ["news-civil-aviation"],
    "tags": ["amst", "wats", "meet", "orlando", "come"]
  },
  {
    "title": "AMST at WATS 2021",
    "url": "/news/amst-at-wats-2021/",
    "date": "2021-06-11T10:00:00",
    "content": "AMST is participating in the World Aviation Training Summit (WATS) taking place on 15 and 16 of June 2021 in Orlando Florida. Join us at our booth #223 to have a chat and introduce you to the latest innovations AMST has to offer.",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/06/AMST-News-CA-2021-05-11_WATS.jpg",
    "categories": ["news-civil-aviation"],
    "tags": ["amst", "wats", "participating", "world", "aviation"]
  },
  {
    "title": "FFS UPRT Upgrade",
    "url": "/news/ffs-uprt-upgrade/",
    "date": "2021-02-15T16:35:00",
    "content": "Upset Prevention and Recovery Training (UPRT) remains a crucial topic in our industry. AMST has developed and delivered a range of solutions to this demanding requirement. We have applied almost 40 years of experience in Training and Flight Simulation with a focus on Human Factors to produce a truly unique product portfolio that is scalable […]",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-CA-2021-02-15_FFS_UPRT_Upgrade.jpg",
    "categories": ["news-civil-aviation"],
    "tags": ["uprt", "training", "upgrade", "upset", "prevention"]
  },
  {
    "title": "AMST at GATS-V 2020",
    "url": "/news/amst-at-gats-v-2020/",
    "date": "2020-11-01T16:19:00",
    "content": "AMST participates in the Global Airline Training & Simulation (GATS) Virtual Conference and Tradeshow taking place from 10-12 Nov. 2020. You can visit our virtual booth at www.gats-event.com. We are looking forward to present to you our ground-breaking solutions for best quality pilot training.",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-NEWS-CA-2020-11_GATS.jpg",
    "categories": ["news-civil-aviation"],
    "tags": ["gats", "amst", "training", "virtual", "participates"]
  },
  {
    "title": "AIRFOX UPRT Qualification",
    "url": "/news/airfox-uprt-qualification/",
    "date": "2020-06-01T07:16:32",
    "content": "AMST is delighted to announce the qualification of our intermediate training device as a Generic Multi Engine Turbofan Aeroplane FNPT II MCC by EASA. This Qualification is only the first step in AMST’s goal to produce intermediate devices capable to be qualified as per the expected new EASA Work Package 2 recommendations expected to be […]",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-CA-2020-06_AIRFOX_URPT_Qualification.jpg",
    "categories": ["news-civil-aviation"],
    "tags": ["qualification", "amst", "intermediate", "easa", "expected"]
  },
  {
    "title": "AIRFOX FFS Level D Qualification",
    "url": "/news/airfox-ffs-level-d-qualification/",
    "date": "2019-10-02T06:32:11",
    "content": "AMST is delighted to announce the qualification of our first A320 NEO Full Flight Simulator (White Tail) to an EASA CS-FSTD(A)-Issue 2 Level D standard. This Full Flight Simulator was designed and built by AMST Aviation B.V., at our facility in the Netherlands (close to Schiphol Airport). This device is equipped with: LEAP Engines Moog […]",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-CA-2019-10_AIRFOX_FFS_Qualification.jpg",
    "categories": ["news-civil-aviation"],
    "tags": ["level", "qualification", "amst", "full", "flight"]
  },
  {
    "title": "EATS Berlin 2019",
    "url": "/news/eats-berlin-2019/",
    "date": "2019-10-01T06:34:28",
    "content": "AMST-Aviation will participate in the European Airline Training Symposium (EATS), which takes place from 29-30 October 2019 in Berlin. Visit us at our booth 114 to discuss with our CEO, CTO and other subject matter experts the exciting solutions AMST-Aviation offers for your training needs.",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-CA-2019-10_EATS.jpg",
    "categories": ["news-civil-aviation"],
    "tags": ["eats", "berlin", "amst", "aviation", "training"]
  },
  {
    "title": "APATS Singapore 2019",
    "url": "/news/apats-singapore-2019/",
    "date": "2019-09-01T06:42:26",
    "content": "AMST-Aviation will participate in the Asia Pacific Airline Training Summit (APATS), which takes place from 3-4 September 2019 at the Sands Expo Convention centre in Singapore. Visit us at our booth 201 to discuss with our CEO, CTO and other subject matter experts the exciting solutions AMST-Aviation offers for your training needs.",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-CA-2019-09_APATS.jpg",
    "categories": ["news-civil-aviation"],
    "tags": ["apats", "singapore", "amst", "aviation", "training"]
  },
  {
    "title": "WATS Orlando 2019",
    "url": "/news/wats-orlando-2019/",
    "date": "2019-05-01T06:49:10",
    "content": "AMST will participate at WATS 2019 in Orlando, USA. We are looking forward to meeting with worldwide leading airlines and training organisations. If you are interested in talking to us at the conference, please contact us via e-mail office@amst-aviation.com or use the conference app.",
    "imagePath": "https://www.amst.co.at/wp-content/uploads/2021/03/AMST-News-CA-2019-05_WATS.jpg",
    "categories": ["news-civil-aviation"],
    "tags": ["wats", "orlando", "amst", "conference", "will"]
  }
]


export default function NewsPage() {
  const [activeTab, setActiveTab] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [filteredNews, setFilteredNews] = useState(processedNewsItems)
  const [showFilters, setShowFilters] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6
  const animationComplete = useRef(true)

  // Extract all unique tags and sort them alphabetically
  const allTags = Array.from(new Set(processedNewsItems.flatMap((item) => item.tags))).sort()

  // Map categories to more readable names
  const categoryMap = {
    all: "All Categories",
    "news-aerospace-medicine": "Aerospace Medicine",
    "news-visual-systems": "Visual Systems",
    "news-civil-aviation": "Civil Aviation",
  }

  // Filter news based on active tab, search query, and selected tags
  useEffect(() => {
    let filtered = [...processedNewsItems]

    // Filter by category
    if (activeTab !== "all") {
      filtered = filtered.filter((item) => item.categories.includes(activeTab))
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (item) => item.title.toLowerCase().includes(query) || item.content.toLowerCase().includes(query),
      )
    }

    // Filter by selected tags
    if (selectedTags.length > 0) {
      filtered = filtered.filter((item) => selectedTags.some((tag) => item.tags.includes(tag)))
    }

    // Delay setting filtered news to avoid ResizeObserver errors during animations
    if (animationComplete.current) {
      setFilteredNews(filtered)
      setCurrentPage(1) // Reset to first page when filters change
    } else {
      // Add a small delay to allow animations to complete
      const timer = setTimeout(() => {
        setFilteredNews(filtered)
        setCurrentPage(1)
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [activeTab, searchQuery, selectedTags])

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1)
  }, [activeTab, searchQuery, selectedTags])

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]))
  }

  // Pagination
  const totalPages = Math.ceil(filteredNews.length / itemsPerPage)
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = filteredNews.slice(indexOfFirstItem, indexOfLastItem)

  const paginate = (pageNumber: number) => {
    // Only change page if different from current
    if (pageNumber !== currentPage) {
      // Set animation flag to false before page change
      animationComplete.current = false
      setCurrentPage(pageNumber)

      // Smooth scroll to top
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })

      // Reset animation flag after animation completes
      setTimeout(() => {
        animationComplete.current = true
      }, 500)
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "news-aerospace-medicine":
        return "bg-blue-700 hover:bg-blue-800"
      case "news-visual-systems":
        return "bg-green-600 hover:bg-green-700"
      case "news-civil-aviation":
        return "bg-orange-600 hover:bg-orange-700"
      default:
        return "bg-gray-700 hover:bg-gray-800"
    }
  }

  // Format date to readable format
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  // Handle animation completion
  const handleAnimationComplete = () => {
    animationComplete.current = true
  }

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pageNumbers = []

    // Always show first page
    pageNumbers.push(1)

    // Calculate range around current page
    const rangeStart = Math.max(2, currentPage - 2)
    const rangeEnd = Math.min(totalPages - 1, currentPage + 2)

    // Add ellipsis after first page if needed
    if (rangeStart > 2) {
      pageNumbers.push("ellipsis1")
    }

    // Add pages in range
    for (let i = rangeStart; i <= rangeEnd; i++) {
      pageNumbers.push(i)
    }

    // Add ellipsis before last page if needed
    if (rangeEnd < totalPages - 1) {
      pageNumbers.push("ellipsis2")
    }

    // Add last page if not already included
    if (totalPages > 1) {
      pageNumbers.push(totalPages)
    }

    return pageNumbers
  }

  return (
    <>
      <div className="bg-gray-50 text-gray-900 min-h-screen mt-[124px] md:mt-[152px]">
        {/* Hero Section */}
        <PageHero
          subtitle="Latest Updates"
          title="News & Events"
          description="Stay updated with the latest news and events from AMST."
          imageSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a4d0d6295f6d1b2514b4e3454fd9efc8.jpg-t7dEqLLo7KcAn2FCQ0LWNJbtrZJz1g.jpeg"
        />

        {/* Search and Filter Section */}
        <section className="py-6 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Search Bar - Left side */}
              <div className="w-full md:w-[40%]">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search news..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-3 pl-12 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-[8px]"
                  />
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  )}
                </div>
              </div>

              {/* Category Tabs and Filter Button - Right side */}
              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={() => setActiveTab("all")}
                  className={`px-6 py-2 transition-colors rounded-[8px] ${
                    activeTab === "all" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setActiveTab("news-aerospace-medicine")}
                  className={`px-6 py-2 transition-colors rounded-[8px] ${
                    activeTab === "news-aerospace-medicine"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  }`}
                >
                  Aerospace Medicine
                </button>
                <button
                  onClick={() => setActiveTab("news-visual-systems")}
                  className={`px-6 py-2 transition-colors rounded-[8px] ${
                    activeTab === "news-visual-systems"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  }`}
                >
                  Visual Systems
                </button>
                <button
                  onClick={() => setActiveTab("news-civil-aviation")}
                  className={`px-6 py-2 transition-colors rounded-[8px] ${
                    activeTab === "news-civil-aviation"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  }`}
                >
                  Civil Aviation
                </button>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center px-6 py-2 bg-gray-100 hover:bg-gray-200 transition-colors rounded-[8px]"
                >
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                  {selectedTags.length > 0 && ` (${selectedTags.length})`}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Tag Filters */}
        <AnimatePresence>
          {showFilters && (
            <motion.section
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-100 overflow-hidden"
              onAnimationComplete={handleAnimationComplete}
            >
              <div className="container mx-auto px-4 py-6">
                <div className="max-w-4xl mx-auto">
                  <div>
                    <div className="flex items-center mb-3">
                      <Tag className="h-4 w-4 mr-2 text-gray-700" />
                      <h3 className="text-sm font-medium text-gray-700">Filter by tags:</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {allTags.map((tag) => (
                        <button
                          key={tag}
                          onClick={() => toggleTag(tag)}
                          className={`text-xs px-3 py-1 transition-all duration-300 rounded-[8px] ${
                            selectedTags.includes(tag)
                              ? "bg-blue-600 text-white"
                              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                          }`}
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                    {selectedTags.length > 0 && (
                      <button
                        onClick={() => setSelectedTags([])}
                        className="text-xs text-blue-600 mt-3 hover:underline flex items-center"
                      >
                        <X className="h-3 w-3 mr-1" /> Clear all filters
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>

        {/* News Content */}
        <section className="py-16 px-4 bg-white">
          <style jsx global>{`
            .news-image-container {
              position: relative;
              overflow: hidden;
            }
            
            .news-image {
              transition: transform 500ms ease-in-out !important;
            }
            
            .news-image-container:hover .news-image {
              transform: scale(1.1) !important;
            }
            
            .news-overlay {
              position: absolute;
              inset: 0;
              background-color: rgba(0, 0, 0, 0.3);
              transition: background-color 500ms ease-in-out !important;
            }
            
            .news-image-container:hover .news-overlay {
              background-color: rgba(0, 0, 0, 0.5) !important;
            }
          `}</style>
          <div className="max-w-7xl mx-auto">
            {filteredNews.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {currentItems.map((item) => (
                    <div
                      key={item.id}
                      className="bg-white shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-500 ease-in-out transform hover:-translate-y-1 rounded-[8px]"
                    >
                      {/* Category Badge */}
                      <div className="relative">
                        <div
                          className={`absolute bottom-4 left-4 z-10 text-xs font-bold text-white px-3 py-1 rounded-[8px] ${getCategoryColor(
                            activeTab !== "all" && item.categories.includes(activeTab) ? activeTab : item.categories[0],
                          )}`}
                        >
                          {
                            categoryMap[
                              (activeTab !== "all" && item.categories.includes(activeTab)
                                ? activeTab
                                : item.categories[0]) as keyof typeof categoryMap
                            ]
                          }
                        </div>

                        <div className="h-64 relative overflow-hidden news-image-container rounded-t-[8px]">
                          <Link href={item.url} target="_blank">
                            <div className="h-full w-full">
                              <Image
                                src={item.imagePath || "/placeholder.svg?height=400&width=600&query=aerospace news"}
                                alt={item.title}
                                fill
                                className="object-cover news-image"
                                style={{ transition: "transform 500ms ease-in-out" }}
                              />
                              <div className="news-overlay" />
                            </div>
                          </Link>
                        </div>
                      </div>

                      {/* News Content */}
                      <div className="p-6">
                        <Link href={item.url} target="_blank">
                          <h2 className="text-xl font-semibold mb-2 transition-colors duration-300">
                            {item.title}
                          </h2>
                        </Link>
                        <p className="text-gray-600 text-sm mb-4">{formatDate(item.date)}</p>
                        <p className="text-gray-700 leading-relaxed mb-4">{item.content.substring(0, 100)}...</p>
                        <Link
                          href={item.url}
                          target="_blank"
                          className={`inline-flex flex-row gap-2 content-center text-white px-4 py-2 rounded-[8px] font-medium ${getCategoryColor(
                            activeTab !== "all" && item.categories.includes(activeTab) ? activeTab : item.categories[0]}`}
                        >
                          Read more
                          <ChevronRight />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="mt-12">
                    {/* Results counter */}
                    <div className="text-center mb-4 text-sm text-gray-600">
                      Showing {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, filteredNews.length)} of{" "}
                      {filteredNews.length} results
                    </div>

                    {/* Desktop pagination */}
                    <nav className="hidden md:flex justify-center" aria-label="Pagination">
                      <ul className="flex items-center gap-1">
                        {/* First page button */}
                        <li>
                          <button
                            onClick={() => paginate(1)}
                            disabled={currentPage === 1}
                            className={`h-10 px-3 flex items-center justify-center rounded-[8px] ${
                              currentPage === 1 ? "text-gray-400 bg-gray-100 cursor-not-allowed" : "text-gray-700 bg-gray-100 hover:bg-gray-200"
                            }`}
                            aria-label="Go to first page"
                          >
                            <span>First</span>
                          </button>
                        </li>

                        {/* Previous button */}
                        <li>
                          <button
                            onClick={() => paginate(currentPage - 1)}
                            disabled={currentPage === 1}
                            className={`w-10 h-10 flex items-center justify-center rounded-[8px] ${
                              currentPage === 1 ? "text-gray-400 cursor-not-allowed" : "text-gray-700 bg-gray-100 hover:bg-gray-200"
                            }`}
                            aria-label="Go to previous page"
                          >
                            <span className="sr-only">Previous page</span>
                            <ChevronLeft />
                          </button>
                        </li>

                        {/* Page numbers */}
                        {getPageNumbers().map((pageNumber, index) => {
                          if (pageNumber === "ellipsis1" || pageNumber === "ellipsis2") {
                            return (
                              <li key={`ellipsis-${index}`}>
                                <span className="w-10 h-10 flex items-center justify-center text-gray-500">...</span>
                              </li>
                            )
                          }

                          return (
                            <li key={`page-${pageNumber}`}>
                              <button
                                onClick={() => paginate(pageNumber as number)}
                                className={`w-10 h-10 flex items-center justify-center rounded-[8px] ${
                                  currentPage === pageNumber
                                    ? "bg-blue-600 text-white"
                                    : "text-gray-700 bg-gray-100 hover:bg-gray-200"
                                }`}
                                aria-label={`Go to page ${pageNumber}`}
                                aria-current={currentPage === pageNumber ? "page" : undefined}
                              >
                                {pageNumber}
                              </button>
                            </li>
                          )
                        })}

                        {/* Next button */}
                        <li>
                          <button
                            onClick={() => paginate(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className={`w-10 h-10 flex items-center justify-center rounded-[8px] ${
                              currentPage === totalPages
                                ? "text-gray-400 cursor-not-allowed"
                                : "text-gray-700 bg-gray-100 hover:bg-gray-200"
                            }`}
                            aria-label="Go to next page"
                          >
                            <span className="sr-only">Next page</span>
                            <ChevronRight />
                          </button>
                        </li>

                        {/* Last page button */}
                        <li>
                          <button
                            onClick={() => paginate(totalPages)}
                            disabled={currentPage === totalPages}
                            className={`h-10 px-3 flex items-center justify-center rounded-[8px] ${
                              currentPage === totalPages
                                ? "text-gray-400 bg-gray-100 cursor-not-allowed"
                                : "text-gray-700 bg-gray-100 hover:bg-gray-200"
                            }`}
                            aria-label="Go to last page"
                          >
                            <span>Last</span>
                          </button>
                        </li>
                      </ul>
                    </nav>

                    {/* Mobile pagination */}
                    <div className="flex md:hidden justify-center items-center gap-4">
                      <button
                        onClick={() => paginate(currentPage - 1)}
                        disabled={currentPage === 1}
                        className={`flex items-center justify-center px-3 py-2 rounded-[8px] ${
                          currentPage === 1 ? "text-gray-400 bg-gray-100 cursor-not-allowed" : "text-gray-700 bg-gray-100 hover:bg-gray-200"
                        }`}
                        aria-label="Previous page"
                      >
                        <ChevronLeft />
                        Prev
                      </button>

                      <span className="text-sm">
                        Page {currentPage} of {totalPages}
                      </span>

                      <button
                        onClick={() => paginate(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className={`flex items-center justify-center px-3 py-2 rounded-[8px] ${
                          currentPage === totalPages
                            ? "text-gray-400 bg-gray-100 cursor-not-allowed"
                            : "text-gray-700 bg-gray-100 hover:bg-gray-200"
                        }`}
                        aria-label="Next page"
                      >
                        Next
                        <ChevronRight />
                      </button>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-16">
                <div className="mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mx-auto text-gray-400"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    <line x1="11" y1="8" x2="11" y2="14"></line>
                    <line x1="8" y1="11" x2="14" y2="11"></line>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">No results found</h3>
                <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria</p>
                <button
                  onClick={() => {
                    setSearchQuery("")
                    setSelectedTags([])
                    setActiveTab("all")
                  }}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  Reset all filters
                </button>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  )
}
