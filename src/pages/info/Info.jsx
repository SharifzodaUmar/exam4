import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router";
import axios from "axios";
import bg8 from '/bg8.png'
import info from "/info.png";
import info2 from "/info2.png";
import info3 from "/info3.png";
import info4 from "/info4.png";
import info5 from "/info5.png";

const Info = () => {
  let { t, i18n } = useTranslation();

  function changeLanguage(lang) {
    i18n.changeLanguage(lang);
  }
  let i18next = localStorage.getItem("i18nextLng");

  let api = "http://37.27.29.18:8001/api/to-dos";
  let [data, setData] = useState([]);

  let { id } = useParams({});

  async function getById() {
    try {
      let { data } = await axios.get(`${api}/${id}`);
      setData(data.data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getById();
  }, []);

  return (
    <>
      <div className="my-[100px]">
        <section className="w-full sm:h-[536px] bg-white rounded-2xl  sm:flex-row flex-col gap-[30px] sm:gap-0 flex items-center justify-between">
         
{data.images && data.images.map(e => (
  <img  
  className="sm:hidden"
    key={e.id} 
    src={`http://37.27.29.18:8001/images/${e.imageName}`} 
    alt="image" 
    style={{ width: '600px', height: '400px' }}
  />
))}

          <article className="sm:w-[630px] h-[470px] flex items-start justify-between flex-col p-[30px] ">
            <div className="flex sm:w-[503px] h-[300px] flex-col items-start gap-[20px]">
              <p className="texgt-[#4D5F7D] text-[20px]">✨{t("Info.section1.text1")}</p>
              <p className="text-[48px] font-[600]">{t("Info.section1.text1")}</p>
              <p className="text-[#7992B2]">
             {t("Info.section1.text2")}
              </p>
              <button className="w-[260px] h-[52px] rounded-4xl text-white text-[18px] font-[600] bg-[#0080FF]">{t("Info.section1.text3")}</button>
            </div>
            <img src={info} alt="" />
          </article>


<article className="bg-[#0080FF] sm:block hidden h-[536px] w-[750px] relative">
{data.images && data.images.map(e => (
  <img  className="absolute left-[-100px] top-[80px]"
    key={e.id} 
    src={`http://37.27.29.18:8001/images/${e.imageName}`} 
    alt="image" 
    style={{ width: '600px', height: '400px' }}
  />
))}
</article>


        </section>




<p className="sm:text-[40px] text-[32px] font-[600] ml-[30px] mb-[50px] mt-[100px]">{t("Info.section2.text6")}</p>



<section className="w-full sm:h-[1250px] flex sm:gap-0 gap-[40px] flex-wrap items-center justify-around p-[10px] sm:p-0  ">

<article className="w-[380px] h-[505px] bg-white flex flex-col items-start p-[10px] gap-[20px] rounded-2xl">
<img src={info4} alt="" />
<p className="text-[20px] w-[300px] font-[600]">{t("Info.section2.text1")}</p>
<div className="text-[#4D5F7D]">
<p className="text-[14px]">  {t("Info.section2.text2")}</p>
<p className="text-[18px] font-[600]">{t("Info.section2.text3")}</p>
</div>
<div className="text-[#4D5F7D]">
<p className="text-[14px]">  {t("Info.section2.text4")}</p>
<p className="text-[18px] font-[600]">{t("Info.section2.text5")}</p>
</div>
</article>

<article className="w-[380px] h-[505px] bg-white flex flex-col items-start p-[10px] gap-[20px] rounded-2xl">
<img src={info2} alt="" />
<p className="text-[20px] w-[300px] font-[600]">{t("Info.section2.text1")}</p>
<div className="text-[#4D5F7D]">
<p className="text-[14px]">  {t("Info.section2.text2")}</p>
<p className="text-[18px] font-[600]">{t("Info.section2.text3")}</p>
</div>
<div className="text-[#4D5F7D]">
<p className="text-[14px]">  {t("Info.section2.text4")}</p>
<p className="text-[18px] font-[600]">{t("Info.section2.text5")}</p>
</div>
</article>

<article className="w-[380px] h-[505px] bg-white flex flex-col items-start p-[10px] gap-[20px] rounded-2xl">
<img src={info3} alt="" />
<p className="text-[20px] w-[300px] font-[600]">{t("Info.section2.text1")}</p>
<div className="text-[#4D5F7D]">
<p className="text-[14px]">  {t("Info.section2.text2")}</p>
<p className="text-[18px] font-[600]">{t("Info.section2.text3")}</p>
</div>
<div className="text-[#4D5F7D]">
<p className="text-[14px]">  {t("Info.section2.text4")}</p>
<p className="text-[18px] font-[600]">{t("Info.section2.text5")}</p>
</div>
</article>

<article className="w-[380px] h-[505px] bg-white flex flex-col items-start p-[10px] gap-[20px] rounded-2xl">
<img src={info4} alt="" />
<p className="text-[20px] w-[300px] font-[600]">{t("Info.section2.text1")}</p>
<div className="text-[#4D5F7D]">
<p className="text-[14px]">  {t("Info.section2.text2")}</p>
<p className="text-[18px] font-[600]">{t("Info.section2.text3")}</p>
</div>
<div className="text-[#4D5F7D]">
<p className="text-[14px]">  {t("Info.section2.text4")}</p>
<p className="text-[18px] font-[600]">{t("Info.section2.text5")}</p>
</div>
</article>

<article className="w-[380px] h-[505px] bg-white flex flex-col items-start p-[10px] gap-[20px] rounded-2xl">
<img src={info5} alt="" />
<p className="text-[20px] w-[300px] font-[600]">{t("Info.section2.text1")}</p>
<div className="text-[#4D5F7D]">
<p className="text-[14px]">  {t("Info.section2.text2")}</p>
<p className="text-[18px] font-[600]">{t("Info.section2.text3")}</p>
</div>
<div className="text-[#4D5F7D]">
<p className="text-[14px]">  {t("Info.section2.text4")}</p>
<p className="text-[18px] font-[600]">{t("Info.section2.text5")}</p>
</div>
</article>

<article className="w-[380px] h-[505px] bg-white flex flex-col items-start p-[10px] gap-[20px] rounded-2xl">
<img src={info2} alt="" />
<p className="text-[20px] w-[300px] font-[600]">{t("Info.section2.text1")}</p>
<div className="text-[#4D5F7D]">
<p className="text-[14px]">  {t("Info.section2.text2")}</p>
<p className="text-[18px] font-[600]">{t("Info.section2.text3")}</p>
</div>
<div className="text-[#4D5F7D]">
<p className="text-[14px]">  {t("Info.section2.text4")}</p>
<p className="text-[18px] font-[600]">{t("Info.section2.text5")}</p>
</div>
</article>



</section>




        <section className="w-full rounded-2xl h-[640px] sm:h-[240px] bg-[#0063E5] text-white sm:flex-row flex-col flex items-center justify-around mt-[50px]">
        <article className="w-[370px] h-[186px] flex flex-col sm:p-0 p-[10px] items-start justify-between">
          <p className="sm:text-[32px] text-[24px] font-[600]">{t("Category.section2.text1")}</p>
          <button className="w-[211px] h-[54px] rounded-4xl border border-white">{t("Category.section2.text2")}➡️</button>
        </article>
        <img src={bg8} alt="" />
        </section>
        
      </div>
    </>
  );
};

export default Info;
