import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import o1 from '/o1.png'
import o2 from '/o2.png'
import o3 from '/o3.png'
import o4 from '/o4.png'
import o5 from '/o5.png'
import o6 from '/o6.png'
import pr1 from '/pr1.png'
import pr2 from '/pr2.png'
import pr3 from '/pr3.png'
import pr4 from '/pr4.png'
import pr5 from '/pr5.png'
import pr6 from '/pr6.png'
import pr7 from '/pr7.png'
import pr8 from '/pr8.png'
import program from '/program.svg'

import bg8 from '/bg8.png'


const Programs = () => {
  let { t, i18n } = useTranslation();
  
    function changeLanguage(lang) {
      i18n.changeLanguage(lang);
    }
    let i18next = localStorage.getItem("i18nextLng");
  return (
    <>  
    <div>

<section className="w-full sm:h-[2728px] sm:flex-row flex-col flex items-start justify-between   my-[100px]">
<article className="s:w-[600px] p-[5px] bg-white rounded-2xl h-[900px] flex flex-col items-start justify-between pb-[30px]">
<img className="w-[350px] sm:w-fit"  src={program} alt="" />
<p className="sm:text-[32px] text-[24px]  sm:w-fit w-[360px] font-[600] ">{t("Program.left.text1")}</p>
<div className="flex sm:flex-row flex-col  items-center gap-[30px]">
  <p className="w-[212px] text-white flex items-center justify-center h-[54px] rounded-4xl bg-[#0080FF] ">{t("Program.left.text2")}</p>
  <p className="w-[212px] border flex items-center justify-center h-[54px] rounded-4xl text-[#0080FF] border-[#0080FF] ">{t("Program.left.text3")}</p>
</div>


<div className="flex  sm:flex-row flex-col items-center gap-[50px]">
  <p className="text-[#4D5F7D] text-[18px] w-[140px] font-[600]">{t("Program.left.text4")}</p>



<div className="flex  items-start gap-[5px]">
  
<div className="flex flex-col items-center justify-between w-[67px] h-[80px]">
  <p className="text-[#0080FF] text-[40px] font-[600]">126</p>
  <p className="text-[#425978]">{t("Program.left.text5")}</p>
</div>
<p className="text-[#0080FF] text-[40px] font-[600]">:</p>

<div className="flex flex-col items-center justify-between w-[67px] h-[80px]">
  <p className="text-[#0080FF] text-[40px] font-[600]">16</p>
  <p className="text-[#425978]">{t("Program.left.text6")}</p>
</div>
<p className="text-[#0080FF] text-[40px] font-[600]">:</p>

<div className="flex flex-col items-center justify-between w-[67px] h-[80px]">
  <p className="text-[#0080FF] text-[40px] font-[600]">38</p>
  <p className="text-[#425978]">{t("Program.left.text7")}</p>
</div>

</div>


</div>

</article>





<article className="sm:w-[800px] w-[360px] p-[10px] sm:h-[2728px] sm:gap-0 gap-[30px] flex flex-col  justify-between items-start ">
<p className="text-[40px] font-[600]">{t("Program.right.text1")}</p>
<p className="text-[#4D5F7D] font-[600] text-[18px]">{t("Program.right.text2")}</p>
<p className="text-[40px] font-[600]">{t("Program.right.text3")}</p>



<div className="grid w-full  sm:h-[430px]  gap-[10px] grid-cols-2 grid-rows-3">


<div className="w-full bg-white rounded-2xl flex flex-col items-start p-[15px] justify-between shadow-xl h-[114px]">

<div className="flex items-center gap-[10px] ">
  <img src={pr1} alt="" />
  <p className="text-[#0080FF]">{t("Program.right.text5")}</p>
</div>

<div className="flex items-center gap-[10px] ">
 <p className="sm:text-[24px] font-[600]">24 000 ₽</p>
  <p className="text-[#7992B2]">45 000 ₽</p>
</div>

</div>



<div className="w-full bg-white rounded-2xl flex flex-col items-start p-[15px] justify-between shadow-xl h-[114px]">

<div className="flex items-center gap-[10px] ">
  <img src={pr2} alt="" />
  <p className="text-[#0080FF]">{t("Program.right.text5")}</p>
</div>

<div className="flex items-center gap-[10px] ">
 <p className="sm:text-[24px] text-[14px] font-[600]">{t("Program.right.text6")}</p>

</div>

</div>


<div className="w-full bg-white rounded-2xl flex flex-col items-start p-[15px] justify-between shadow-xl h-[114px]">

<div className="flex items-center gap-[10px] ">
  <img src={pr3} alt="" />
  <p className="text-[#0080FF]">{t("Program.right.text7")}</p>
</div>

<div className="flex items-center gap-[10px] ">
 <p className="sm:text-[24px] text-[14px] font-[600]"> {t("Program.right.text8")}</p>

</div>

</div>


<div className="w-full bg-white rounded-2xl flex flex-col items-start p-[15px] justify-between shadow-xl h-[114px]">

<div className="flex items-center gap-[10px] ">
  <img src={pr4} alt="" />
  <p className="text-[#0080FF]">{t("Program.right.text9")}</p>
</div>

<div className="flex items-center gap-[10px] ">
 <p className="sm:text-[24px] text-[14px] font-[600]"> {t("Program.right.text10")}</p>

</div>

</div>

<div className="w-full bg-white rounded-2xl flex flex-col items-start p-[15px] justify-between shadow-xl h-[114px]">

<div className="flex items-center gap-[10px] ">
  <img src={pr5} alt="" />
  <p className="text-[#0080FF]">{t("Program.right.text11")}</p>
</div>

<div className="flex items-center gap-[10px] ">
 <p className="sm:text-[24px] text-[14px] font-[600]"> {t("Program.right.text12")}</p>

</div>

</div>

<div className="w-full bg-white rounded-2xl flex flex-col items-start p-[15px] justify-between shadow-xl h-[114px]">

<div className="flex items-center gap-[10px] ">
  <img src={pr6} alt="" />
  <p className="text-[#0080FF]">{t("Program.right.textx13")}</p>
</div>

<div className="flex items-center gap-[10px] ">
 <p className="sm:text-[24px] text-[14px] font-[600]">{t("Program.right.text14")}</p>

</div>

</div>


</div>



<p className="text-[40px] font-[600]">{t("Program.right.text15")}</p>

<div className="w-full flex items-start justify-around sm:h-[135px] bg-white rounded-2xl shadow-xl p-[10px]">
  <p className="py-[3px] px-[25px] text-white bg-[#0080FF] text-[24px] font-[600] rounded-4xl ">2</p>
  <div className="w-[650px] flex flex-col items-start gap-[10px]"> 
    <p className="text-[24px] font-[600]">{t("Program.right.text16")}</p>
    <p className="text-[#4D5F7D]">{t("Program.right.text17")}</p>
  </div>
</div><br />
<div className="w-full flex items-start justify-around sm:h-[135px] bg-white rounded-2xl shadow-xl p-[10px]">
  <p className="py-[3px] px-[25px] text-white bg-[#0080FF] text-[24px] font-[600] rounded-4xl ">2</p>
  <div className="w-[650px] flex flex-col items-start gap-[10px]"> 
    <p className="text-[24px] font-[600]">{t("Program.right.text16")}</p>
    <p className="text-[#4D5F7D]">{t("Program.right.text17")}</p>
  </div>
</div><br />
<div className="w-full flex items-start justify-around sm:h-[135px] bg-white rounded-2xl shadow-xl p-[10px]">
  <p className="py-[3px] px-[25px] text-white bg-[#0080FF] text-[24px] font-[600] rounded-4xl ">2</p>
  <div className="w-[650px] flex flex-col items-start gap-[10px]"> 
    <p className="text-[24px] font-[600]">{t("Program.right.text16")}</p>
    <p className="text-[#4D5F7D]">{t("Program.right.text17")}</p>
  </div>
</div>
<p className="text-[40px] font-[600]">{t("Program.right.text18")}</p>



<div className="w-full sm:h-[800px] grid grid-cols-2 grid-rows-3 gap-[10px]">


<div className="w-full p-[10px] sm:flex-row flex-col  flex items-center gap-[10px] sm:h-[223px] bg-white shadow-xl rounded-2xl">
<img src={o1} alt="" />

<div className="flex flex-col items-center gap-[40px]">
<p className="text-[20px] font-[600]">{t("Program.right.text19")}</p>
<p className="text-[#4D5F7D]">{t("Program.right.text20")}</p>


</div>


</div>


<div className="w-full p-[10px] sm:flex-row flex-col  flex items-center gap-[10px] sm:h-[223px] bg-white shadow-xl rounded-2xl">
<img src={o2} alt="" />

<div className="flex flex-col items-center gap-[40px]">
<p className="text-[20px] font-[600]">{t("Program.right.text19")}</p>
<p className="text-[#4D5F7D]">{t("Program.right.text20")}</p>


</div>


</div>


<div className="w-full p-[10px] sm:flex-row flex-col  flex items-center gap-[10px] sm:h-[223px] bg-white shadow-xl rounded-2xl">
<img src={o3} alt="" />

<div className="flex flex-col items-center gap-[40px]">
<p className="text-[20px] font-[600]">{t("Program.right.text19")}</p>
<p className="text-[#4D5F7D]">{t("Program.right.text20")}</p>
</div>
</div>



<div className="w-full p-[10px] sm:flex-row flex-col  flex items-center gap-[10px] sm:h-[223px] bg-white shadow-xl rounded-2xl">
<img src={o4} alt="" />

<div className="flex flex-col items-center gap-[40px]">
<p className="text-[20px] font-[600]">{t("Program.right.text19")}</p>
<p className="text-[#4D5F7D]">{t("Program.right.text20")}</p>
</div>
</div>

<div className="w-full p-[10px] sm:flex-row flex-col  flex items-center gap-[10px] sm:h-[223px] bg-white shadow-xl rounded-2xl">
<img src={o5} alt="" />

<div className="flex flex-col items-center gap-[40px]">
<p className="text-[20px] font-[600]">{t("Program.right.text19")}</p>
<p className="text-[#4D5F7D]">{t("Program.right.text20")}</p>
</div>
</div>

<div className="w-full p-[10px] sm:flex-row flex-col  flex items-center gap-[10px] sm:h-[223px] bg-white shadow-xl rounded-2xl">
<img src={o6} alt="" />

<div className="flex flex-col items-center gap-[40px]">
<p className="text-[20px] font-[600]">{t("Program.right.text19")}</p>
<p className="text-[#4D5F7D]">{t("Program.right.text20")}</p>
</div>
</div>


</div>



<section className="w-full rounded-2xl h-[640px] sm:h-[240px] bg-[#0063E5] text-white sm:flex-row flex-col flex items-center justify-around">
<article className="w-[370px] h-[186px] flex  p-[15px] flex-col items-start justify-between">
  <p className="sm:text-[32px] text-[24px]  font-[600]">{t("Category.section2.text1")}</p>
  <button className="w-[211px] h-[54px] rounded-4xl border border-white">{t("Category.section2.text2")}➡️</button>
</article>
<img src={bg8} alt="" />
</section>

</article>







</section>



    </div> </>
  )
}

export default Programs