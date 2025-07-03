import React from 'react'
import {useTranslation} from 'react-i18next'
import { Link, Outlet } from 'react-router'
import logo from '/logo.png'
import lines from '/lines.png'
import social from '/social.png'




const Layout = () => {

    


    let {t , i18n }=useTranslation()
 
function changeLanguage(lang) {
    i18n.changeLanguage(lang)
    
}

let i18next=localStorage.getItem('i18nextLng')






  return (
    <div className='bg-[#F0F4FA]'>

    <div className='sm:max-w-[1450px] max-w-[360px] bg-[#F0F4FA] m-auto  sm:p-4'>

 <header className='w-full  sm:h-[84px] h-[120px] bg-[#FFFFFF] shadow-xl shadow-[#19378F1A] flex flex-wrap sm:flex-nowrap  items-center justify-around'>

    <div className='flex items-center gap-[10px]'>  
<img src={logo} alt="" />
<div>
    <p className='sm:text-[14px] text-[12px] text-white bg-[#0080FF] rounded-xl p-[5px]'>{t('Header.hashtag')}</p>
    <p className='sm:text-[18px] text-[14px] font-[600]'>{t('Header.dpo')}</p>
</div>
 </div>
<div className='sm:w-[221px] w-[110px] py-[1px] sm:h-[52px] bg-[#0080FF] rounded-2xl text-white text-[18px] font-[600] flex items-center justify-around'>
    <img className='w-[20px]  sm:w-fit' src={lines} alt="" />    

    <div> 

   <p className='text-[12px] border-b text-center'>Язык</p>
<select value={i18next} className='outline-0 text-[12px] border rounded-[2px] sm:text-[18px]' onChange={(e)=>changeLanguage(e.target.value)} >
<option className='text-blue-700' value="en">English</option>
<option className='text-blue-700' value="ru">Russian</option>
<option className='text-blue-700' value="tj">Tajik</option>
</select> </div>

</div>



<div className='w-[365px] h-[52px] rounded-xl  sm:flex hidden items-center justify-center gap-[20px]  border  border-[#CED8EB]'>
    <p className='text-[20px]'>🔍 </p><input className='outline-0' type="text" placeholder={t('Header.placeholder1')} />
</div>

<img className='sm:block hidden' src={social} alt="" />







<ul className='flex items-center justify-center gap-[20px] text-[#4D5F7D] font-[600] cursor-pointer'>

    <Link to={'/'}>   
   <p>{t("Header.home")}</p>
   </Link>


   <Link to={'category'}>  
   <p>{t("Header.category")}</p>

 </Link>  
 <Link to={'programs'}>   
     <p>{t("Header.program")}</p>
    </Link>
</ul>


</header> 





<main>
<Outlet />
</main>



 <footer className='w-full bg-[#F0F4FA] flex items-center flex-col justify-evenly sm:h-[229px] mt-[100px] p-[10px]'>
<section className='w-[100%] flex-col sm:flex-row flex sm:h-[92px] gap-[20px] items-start sm:items-center justify-around'>

<article className='flex flex-col items-start justify-between h-[92px]'>
<p className='text-[#4D5F7D]'>{t('Footer.workHours.title')}</p>
<p className='text-[18px] font-[600]'>{t('Footer.workHours.monThu')}<br />
{t('Footer.workHours.fri')}</p>
</article>


<article className='flex flex-col items-start justify-between h-[92px]'>
<p className='text-[#4D5F7D]'>{t('Footer.phone.title')}</p>
<p className='text-[18px] font-[600]'>7 (495) 255-67-67 <br />
<p>{t('Footer.phone.ext')}</p></p>
</article>


<article className='flex flex-col items-start justify-between h-[92px]'>
<p className='text-[#4D5F7D]'>{t('Footer.additional.title')}</p>
<p className='text-[18px] font-[600]'>{t('Footer.additional.privacyPolicy')}<br />
    <p>  {t('Footer.additional.mainSite')} </p> 
</p>
</article>
<img src={social} alt="" />



</section>
<hr className='my-[20px]  w-[95%] text-[#CED8EB]' />
<div className='flex flex-col gap-[20px] sm:flex-row   w-full justify-around items-start sm:items-center text-[#4D5F7D] text-[12px]'>
<p>{t('Footer.university.fullName')}</p>
<p>{t('Footer.university.license')}</p>
<p>{t('Footer.university.inn')}</p>
<p>{t('Footer.university.ogrn')}</p>
</div>
</footer> 


    </div>
    </div>
  )
}

export default Layout