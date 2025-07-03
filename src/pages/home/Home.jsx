import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Button, Modal, Input } from 'antd';
import {Link} from 'react-router'
import p1 from "/p1.png";
import axios from 'axios'
import p2 from "/p2.png";
import p3 from "/p3.png";
import p4 from "/p4.png";
import p5 from "/p5.png";
import p6 from "/p6.png";



import p7 from "/p7.png";
import n1 from "/n1.png";
import n2 from "/n2.png";
import n3 from "/n3.png";
import n4 from "/n4.png";

import s11 from "/s11.png";
import s10 from "/s10.png";
import bg1 from "/bg1.png";
import bg2 from "/bg2.png";
import bg3 from "/bg3.png";
import bg4 from "/bg4.png";
import bg6 from "/bg6.svg";
import left from "/left.svg";
import i1 from "/i1.png";
import i2 from "/i2.png";
import i3 from "/i3.png";

const Home = () => {
  let { t, i18n } = useTranslation();

  function changeLanguage(lang) {
    i18n.changeLanguage(lang);
  }
  let i18next = localStorage.getItem("i18nextLng");


let api='http://37.27.29.18:8001/api/to-dos'
let [data,setData]=useState([])

let [addDailog,setAddDialog]=useState(false)

let [edit,setEdit]=useState(false)
let [inpName,setInpName]=useState('')
let [inpDescription,setInpDescription]=useState('')
let [idx,setIdx]=useState(null)


let [openImage,setOpenImage]=useState(false)
let [userStatus,setUserStatus]=useState(true)

let [imageId,setImageId]=useState(null)

async function get() {
  try {
    let {data}=await axios.get(api)
setData(data.data)
  } catch (error) {
    console.error(error);
    
  }
  
}
async function deleteUser(id) {
  try {
    await axios.delete(`${api}?id=${id}`)
    get()
  } catch (error) {
    console.error(error);
    
  }
}
function handleCancel() {
  setAddDialog(false)
}
useEffect(()=>{
  get()
},[])
async function addNewUser(event) {
  event.preventDefault()
  let target=event.target
  let formData=new FormData()

  formData.append('Name',target['name'].value)
  formData.append('Description',target['description'].value)
for(let i=0;i<target['image'].files.length;i++){
  formData.append('Images',target['image'].files[i])
}
try {
  await axios.post(api,formData)
  setAddDialog(false)
  get()
} catch (error) {
  console.error(error);
  
}

}
function closeEdit() {
 setEdit(false)
}
function openEdit(e) {
  setIdx(e.id)
  setInpDescription(e.description)
  setInpName(e.name)
  setEdit(true)
}
async function editUser() {
  try {
    let updateUser={
      name:inpName,
      description:inpDescription,
      id:idx
    }
    await axios.put(api,updateUser)
    get()
    setEdit(false)
  } catch (error) {
    console.error(error);
    
  }
}

function closeImage() {
  setOpenImage(false)
}





async function addImage(event) {
  event.preventDefault()
  let target=event.target
  let formData=new FormData()
  for(let i=0;i<target['addImage'].files.length;i++){
    formData.append("Images",target['addImage'].files[i])
  }
  try {
    await axios.post(`${api}/${imageId}/images`,formData)
    setOpenImage(false)
    get()
  } catch (error) {
    console.error(error);
    
  }
}

function extraImage(e) {
  setImageId(e.id)
  setOpenImage(true)

}
async function deleteImage(id) {
  try {
    await axios.delete(`${api}/images/${id}`)
    get()
  } catch (error) {
    console.error(error);
    
  }
}

async function chageStatus(e) {
 
  try {
     let updateStatus={
    ...e,
    status:!e.status
  }
    await axios.put(`http://37.27.29.18:8001/completed?id=${e.id}`,updateStatus)
    
    get()
  } catch (error) {
    console.error(error);
    
  }
}





  return (
    <div className="bg-[#F0F4FA]">
      <section className="sm:w-full w-[336px] m-auto h-[487px] sm:h-[191px] text-white  bg-[#3284FF] rounded-2xl my-[100px] flex flex-col sm:flex-row items-center justify-evenly">
        <p className="sm:text-[28px] text-[24px]  text-center sm:w-[450px] font-[600]">
          {t("Home.section1.text1")}
        </p>

        <article className="sm:w-[536px] w-[300px]  h-[101px]  flex flex-col items-center justify-between sm:h-[119px] ">
          <p className="text-[18px] font-[600]">{t("Home.section1.text2")}</p>

          <div className="sm:w-full w-[300px] h-[62px]  sm:h-[80px] flex items-center justify-between ">
            <div className="sm:w-[116px] w-[66px]  h-[62px] sm:h-[80px] flex items-center justify-between flex-col  ">
              <div className="flex items-center justify-between w-full sm:text-[24px] font-[400] text-[16px] sm:font-[600]">
                <p className="border border-[#83C1FF]  sm:rounded-[12px] rounded-[5px] sm:w-[56px]  w-[32px] h-[32px] sm:h-[50px] flex items-center justify-center ">
                  9
                </p>
                <p className="border border-[#83C1FF]  sm:rounded-[12px] rounded-[5px] sm:w-[56px]  w-[32px] h-[32px] sm:h-[50px] flex items-center justify-center ">
                  8
                </p>
              </div>
              <p>{t("Home.section1.day")}</p>
            </div>

            <div className="sm:w-[116px] w-[66px]  h-[62px] sm:h-[80px] flex items-center justify-between flex-col  ">
              <div className="flex items-center justify-between w-full sm:text-[24px] font-[400] text-[16px] sm:font-[600]">
                <p className="border border-[#83C1FF]  sm:rounded-[12px] rounded-[5px] sm:w-[56px]  w-[32px] h-[32px] sm:h-[50px] flex items-center justify-center ">
                  1
                </p>
                <p className="border border-[#83C1FF]  sm:rounded-[12px] rounded-[5px] sm:w-[56px]  w-[32px] h-[32px] sm:h-[50px] flex items-center justify-center ">
                  8
                </p>
              </div>
              <p>{t("Home.section1.hour")}</p>
            </div>

            <div className="sm:w-[116px] w-[66px]  h-[62px] sm:h-[80px] flex items-center justify-between flex-col  ">
              <div className="flex items-center justify-between w-full sm:text-[24px] font-[400] text-[16px] sm:font-[600]">
                <p className="border border-[#83C1FF]  sm:rounded-[12px] rounded-[5px] sm:w-[56px]  w-[32px] h-[32px] sm:h-[50px] flex items-center justify-center ">
                  4
                </p>
                <p className="border border-[#83C1FF]  sm:rounded-[12px] rounded-[5px] sm:w-[56px]  w-[32px] h-[32px] sm:h-[50px] flex items-center justify-center ">
                  5
                </p>
              </div>
              <p>{t("Home.section1.minut")}</p>
            </div>
            <div className="sm:w-[116px] w-[66px]  h-[62px] sm:h-[80px] flex items-center justify-between flex-col  ">
              <div className="flex items-center justify-between w-full sm:text-[24px] font-[400] text-[16px] sm:font-[600]">
                <p className="border border-[#83C1FF]  sm:rounded-[12px] rounded-[5px] sm:w-[56px]  w-[32px] h-[32px] sm:h-[50px] flex items-center justify-center ">
                  1
                </p>
                <p className="border border-[#83C1FF]  sm:rounded-[12px] rounded-[5px] sm:w-[56px]  w-[32px] h-[32px] sm:h-[50px] flex items-center justify-center ">
                  1
                </p>
              </div>
              <p>{t("Home.section1.seconds")}</p>
            </div>
          </div>
        </article>
        <button className="w-[251px] bg-white text-[18px] text-black font-[600] h-[64px] rounded-4xl ">
          {t("Home.section1.button")}
        </button>
      </section>

      <section className="w-full  h-[777px]  sm:h-[710px] ">
        <div className="flex sm:w-[565px] w-[336px] h-[46px] sm:h-[55px] items-center justify-between  text-[14px] font-[400] sm:text-[18px] sm:font-[600]">
          <p className="bg-white  sm:w-[132px] w-[80px] h-[55px] flex items-center justify-center rounded-tr-[40%] ">
            {t("Home.section2.text1")}
          </p>
          <p>{t("Home.section2.text2")}</p>
          <p>{t("Home.section2.text3")}</p>
        </div>

        <article className="w-full flex items-center justify-between">
          <div className="sm:w-[730px] sm:h-[653px] p-[10px]  bg-white rounded-tr-2xl rounded-br-2xl  flex items-center justify-center">
            <div className=" sm:w-[650px] flex flex-col gap-[30px] ">
              <p className="text-[#7992B2] text-[18px] sm:text-[24px] font-[600]">
                {t("Home.section2.text4")}
              </p>
              <p className="text-[24px] w-[312px] sm:w-[700px] sm:text-[48px] font-[600]">
                {t("Home.section2.text5")}
              </p>
              <button className="w-[313px]  sm:w-[212px] sm:m-0 m-auto text-white rounded-2xl h-[56px] bg-[#0080FF]">
                {t("Home.section2.text")}
              </button>
              <br />
              <br />

              <div className="flex flex-wrap gap-[10px] items-center ">
                <p className="bg-[#E3EAF7] px-[10px] py-[5px] rounded-2xl ">
                  {t("Home.section2.t2")}
                </p>
                <p className="bg-[#E3EAF7] px-[10px] py-[5px] rounded-2xl ">
                  {t("Home.section2.t3")}
                </p>
                <p className="bg-[#E3EAF7] px-[10px] py-[5px] rounded-2xl ">
                  {t("Home.section2.t4")}
                </p>
                <p className="bg-[#E3EAF7] px-[10px] py-[5px] rounded-2xl ">
                  {t("Home.section2.t5")}
                </p>
                <p className="bg-[#E3EAF7] px-[10px] py-[5px] rounded-2xl ">
                  {t("Home.section2.t6")}
                </p>
                <p className="bg-[#E3EAF7] px-[10px] py-[5px] rounded-2xl ">
                  {t("Home.section2.t7")}
                </p>
                <p className="bg-[#E3EAF7] px-[10px] py-[5px] rounded-2xl ">
                  {t("Home.section2.t8")}
                </p>
                <p className="bg-[#E3EAF7] px-[10px] py-[5px] rounded-2xl ">
                  {t("Home.section2.t9")}
                </p>
                <p className="bg-[#E3EAF7] px-[10px] py-[5px] rounded-2xl ">
                  {t("Home.section2.t10")}
                </p>
                <p className="bg-[#E3EAF7] px-[10px] py-[5px] rounded-2xl ">
                  {t("Home.section2.t11")}
                </p>
                <p className="bg-[#E3EAF7] px-[10px] py-[5px] rounded-2xl ">
                  {t("Home.section2.t12")}
                </p>
                <p className="bg-[#E3EAF7] px-[10px] py-[5px] rounded-2xl ">
                  {t("Home.section2.t1")}
                </p>
              </div>
            </div>
          </div>
          <img src={p1} className="hidden sm:block" alt="" />
        </article>
      </section>

      <p className="text-[40px] font-[600] mt-[100px] mb-[50px] ml-[20px]">
        {t("Home.section3.text1")}
      </p>



 


 <Button className="sm:ml-[700px] my-[50px]" type="primary" onClick={()=>setAddDialog(true)}>Add new User</Button>

<section className="w-full  mb-[100px] flex sm:flex-row flex-col items-start justify-between">
<img src={left} alt="" />


 <Modal
        title="Basic Modal"
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={openImage}
        footer={null}
        onCancel={closeImage}
      >
       
       <form onSubmit={addImage}>
        <input type="file" name='addImage'  />
        <button type='submit' className='px-[20px] py-[5p] border border-blue-600'>Save</button>
       </form>
      </Modal>

  <Modal
        title="Basic Modal"
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={addDailog}
        onCancel={handleCancel}
        footer={null}
      > <div> 
        <form onSubmit={addNewUser}> 
     <input type="text" name='name' placeholder='name...' />
     <input type="text" name='description' placeholder='description...' />
     <input type="file"  name='image' placeholder='image...' />
     <button type='submit' className='px-[20px] py-[5px] border-2 border-blue-500 rounded-xl'>Save</button>
       </form></div>
      </Modal>


 <Modal
        title="Basic Modal"
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={edit}
        onOk={editUser}
        onCancel={closeEdit}
      >
     <Input placeholder="Name..." value={inpName} onChange={(e)=>setInpName(e.target.value)} />
     <Input placeholder="Description..." value={inpDescription} onChange={(e)=>setInpDescription(e.target.value)} />

      </Modal>


   {/* ⚡⚡⚡⚡⚡⚡⚡⚡ */}
   
<article className="sm:w-[1140px]  flex items-center justify-evenly flex-wrap gap-[50px]">

{data.map((e)=>{
  return (
    <div key={e.id} className=' p-[10px] w-[380px] h-[570px]  rounded-2xl bg-white flex flex-col items-start  justify-between gap-[20px]'>
       {e.images.map((el)=>{
        return (
          <div key={el.id} className=" w-[356px] flex flex-col items-end h-[261px]">
            <img className='w-[356px] h-[261px]' src={`http://37.27.29.18:8001/images/${el.imageName}`} alt="" /><br />
            <button className='p-[5px] text-[12px] border border-rose-600 rounded-xl' onClick={()=>deleteImage(el.id)}>Delete Image</button>
          </div>
        )
      })}
      <p className='text-[24px] font-extrabold'>{e.name}</p>
<div className="text-[#4D5F7D]">
<p className="text-[14px]">  {t("Home.section6.text5")}</p>
<p className="text-[18px] font-[600]">{t("Home.section6.text6")}</p>
</div>
     
      <div className='flex flex-wrap  gap-[10px] rounded-xl p-[0px] items-center justify-around'>  
<Button type="primary" danger onClick={()=>deleteUser(e.id)}>
      Delete
    </Button>
     <Button type="primary" onClick={()=>openEdit(e)}>Edit</Button>

<Link to={`info/${e.id}`}>   
     <Button type="primary" >Info</Button>
</Link>
     <Button type="dashed" onClick={()=>extraImage(e)}>Add Extra Image</Button>

     <Button type="dashed" onClick={()=>chageStatus(e)}>Change Status</Button>

</div>

    </div>
  )
})}

</article>




</section>



       <p className="text-[40px] font-[600] mt-[100px] mb-[50px] ml-[20px]">
        {t("Home.section3.text1")}
      </p>

      <section className="w-full sm:h-[618px]  h-[970px]  flex-col sm:flex-row flex gap-[30px] items-center justify-between">
        <article className="sm:w-[500px] w-[336px] p-[20px] h-[160px] sm:h-[618px] bg-[#0080FF]  rounded-2xl relative">
          <p className="sm:text-[32px] text-[18px] text-white font-[600]">
            {t("Home.section3.text2")}
          </p>
          <img
            src={p2}
            className="absolute bottom-0 left-[70px] hidden sm:block  "
            alt=""
          />
          <img
            src={p7}
            className="absolute bottom-0 right-[0px] sm:hidden "
            alt=""
          />
        </article>

        <article className="sm:w-[1020px] sm:h-[618px] items-center justify-center  grid sm:grid-cols-2 grid-rows-4 sm:grid-rows-2 gap-[20px]">
          <div className="w-[336px] h-[160px] sm:w-[455px] shadow-xl rounded-2xl shadow-[#19378F0D] flex items-start p-[30px] justify-between flex-col bg-white sm:h-[289px]">
            <img className="sm:w-fit w-[100px] " src={n1} alt="" />
            <p className="sm:text-[24px] text-[18px] font-[600]">
              {t("Home.section3.text3")}
            </p>
          </div>

          <div className="w-[336px] h-[160px] sm:w-[455px] shadow-xl rounded-2xl shadow-[#19378F0D] flex items-start p-[30px] justify-between flex-col bg-white sm:h-[289px]">
            <img src={n2} className="sm:w-fit w-[100px] " alt="" />
            <p className="sm:text-[24px] text-[18px] font-[600]">
              {t("Home.section3.text4")}
            </p>
          </div>

          <div className="w-[336px] h-[160px] sm:w-[455px] shadow-xl rounded-2xl shadow-[#19378F0D] flex items-start p-[30px] justify-between flex-col bg-white sm:h-[289px]">
            <img src={n3} className="sm:w-fit w-[150px] " alt="" />
            <p className="sm:text-[24px] text-[18px] font-[600]">
              {t("Home.section3.text5")}
            </p>
          </div>

          <div className="w-[336px] h-[160px] sm:w-[455px] shadow-xl rounded-2xl shadow-[#19378F0D] flex items-start p-[30px] justify-between flex-col bg-white sm:h-[289px]">
            <img src={n4} className="sm:w-fit w-[150px] " alt="" />
            <p className="sm:text-[24px] text-[18px] font-[600]">
              {t("Home.section3.text6")}
            </p>
          </div>
        </article>
      </section>

      <p className="text-[40px] font-[600] mt-[100px] mb-[50px] ml-[20px]">
        {t("Home.section4.text")}
      </p>




      <section className=" w-full h-[950px] sm:h-[557px] bg-[#0080FF]  relative rounded-2xl my-[100px] sm:p-0 p-[20px]">

<img src={s11} className="absolute sm:top-[-40px] top-[-100px] sm:left-[100px]" alt="" />

<article className="sm:w-[520px] sm:h-[429px] absolute text-white sm:right-[150px] top-[300px] sm:top-[70px] flex items-start flex-col justify-around ">
<p className="text-[32px] font-[600]">  {t("Home.section4.text1")}</p>
<p className="sm:w-[502px]">{t("Home.section4.text2")}
</p><br className="sm:hidden" />
<p>
{t("Home.section4.text3")}</p>
<br className="sm:hidden" />
<div className="flex flex-col sm:flex-row w-full items-center gap-[20px]">
<p className="bg-white rounded-xl text-[#0080FF] text-[18px] font-[600] w-[312px] sm:w-[190px] h-[52px] flex items-center justify-center">{t("Home.section4.text4")}</p>
<p className=" rounded-xl border border-white text-[18px] font-[600] w-[312px] sm:w-[190px] h-[52px] flex items-center justify-center">{t("Home.section4.text5")}</p>
</div>

</article>
      </section>




<section className="w-full h-[1524px]  sm:h-[808px] bg-white  sm:flex-row flex-col flex items-center justify-around sm:justify-between">
    <article>
      <p className="text-[40px] font-[600] ml-[10px] ">{t("Home.section5.text")}</p>
      <img src={s10} alt="" />
    </article>




<article className="w-full sm:w-[900px] h-[1084] sm:h-[680px] flex flex-col sm:grid grid-cols-2 gap-[15px]  grid-rows-3 ">



<div className="sm:w-[440px] w-full h-[150px] sm:h-[210px] p-[15px] rounded-2xl sm:p-[30px] bg-[#F0F4FA]">
<p className="sm:text-[24px] text-[18px] font-[600]">{t("Home.section5.text1")}</p><br />
<p className="text-[#4D5F7D] text-[16px] sm:text-[20px] font-[300]">{t("Home.section5.text2")}</p>
</div>


<div className="sm:w-[440px] w-full h-[150px] sm:h-[210px] p-[15px] rounded-2xl sm:p-[30px] bg-[#F0F4FA]">
<p className="sm:text-[24px] text-[18px] font-[600]">{t("Home.section5.text3")}</p><br />
<p className="text-[#4D5F7D] text-[16px] sm:text-[20px] font-[300]">{t("Home.section5.text4")}</p>
</div>


<div className="sm:w-[440px] w-full h-[150px] sm:h-[210px] p-[15px] rounded-2xl sm:p-[30px] bg-[#F0F4FA]">
<p className="sm:text-[24px] text-[18px] font-[600]">{t("Home.section5.text1")}</p><br />
<p className="text-[#4D5F7D] text-[16px] sm:text-[20px] font-[300]">{t("Home.section5.text2")}</p>
</div>

<div className="sm:w-[440px] w-full h-[150px] sm:h-[210px] p-[15px] rounded-2xl sm:p-[30px] bg-[#F0F4FA]">
<p className="sm:text-[24px] text-[18px] font-[600]">{t("Home.section5.text3")}</p><br />
<p className="text-[#4D5F7D] text-[16px] sm:text-[20px] font-[300]">{t("Home.section5.text4")}</p>
</div>


<div className="sm:w-[440px] w-full h-[150px] sm:h-[210px] p-[15px] rounded-2xl sm:p-[30px] bg-[#F0F4FA]">
<p className="sm:text-[24px] text-[18px] font-[600]">{t("Home.section5.text1")}</p><br />
<p className="text-[#4D5F7D] text-[16px] sm:text-[20px] font-[300]">{t("Home.section5.text2")}</p>
</div>
<div className="sm:w-[440px] w-full h-[150px] sm:h-[210px] p-[15px] rounded-2xl sm:p-[30px] bg-[#F0F4FA]">
<p className="sm:text-[24px] text-[18px] font-[600]">{t("Home.section5.text3")}</p><br />
<p className="text-[#4D5F7D] text-[16px] sm:text-[20px] font-[300]">{t("Home.section5.text4")}</p>
</div>

</article>


</section>




<section className="w-full sm:h-[480px] h-[1436px] sm:flex items-center justify-between my-[100px]">
<img src={bg1} className="sm:hidden  w-[360px] h-[480px]" alt="" />


<article className=" h-[916px] sm:h-[480px] w-full sm:w-[600px] gap-[10px] grid sm:grid-cols-2 grid-rows-4 sm:grid-rows-2">

<div className="bg-white  p-[20px] rounded-xl shadow-xl">
  <p className="text-[30px] font-[600]">{t("Home.section6.text1")}</p> <br /><br />
  <p className="w-[152px] h-[52px] rounded-xl shadow-xl text-white flex items-center justify-center bg-[#0080FF]">{t("Home.section6.text2")}</p>
</div>



<div className="bg-white p-[20px] rounded-xl shadow-xl">
 <img src={i1} alt="" /><br /><br />
 <p className="text-[#425978]">{t("Home.section6.text3")}</p>
</div>
<div className="bg-white p-[20px] rounded-xl shadow-xl">
 <img src={i2} alt="" /><br /><br />
 <p className="text-[#425978]">{t("Home.section6.text3")}</p>
</div>
<div className="bg-white p-[20px] rounded-xl shadow-xl">
 <img src={i3} alt="" /><br /><br />
 <p className="text-[#425978]">{t("Home.section6.text3")}</p>
</div>


</article>



<img src={bg1} className="hidden sm:block" alt="" />
</section>



<section className="w-full h-[800px] sm:h-[594px] my-[100px] relative flex sm:flex-row flex-col items-center bg-white justify-between">
<img className="hidden sm:block" src={bg2} alt="" />
<article className="sm:w-[500px] sm:h-[594px] flex flex-col items-center justify-between">
<p className="sm:text-[48px] text-[24px] font-[600] mt-[80px]">{t("Home.section6.text4")}</p>
<img src={bg4} alt="" />
</article>
<img src={bg6} alt="" />
<img className="hidden sm:block" src={bg3} alt="" />
</section>

   <p className="text-[40px] font-[600] mt-[100px] mb-[50px] ml-[20px]">
        {t("Home.section3.text1")}
      </p>

<section className="w-full sm:h-[640px] sm:flex-row flex-col  flex items-center  justify-between gap-[10px]">
<img className="w-[340px]" src={p3} alt="" />
<img className="w-[340px]" src={p4} alt="" />
<img className="w-[340px]" src={p5} alt="" />
<img className="w-[340px]" src={p6} alt="" />
</section>



    </div>
  );
};

export default Home;
