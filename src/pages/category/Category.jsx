import React, { useState, useEffect } from "react";
import rocket from '/rocket.png'
import bg7 from '/bg7.png'
import bg8 from '/bg8.png'
import { useTranslation } from "react-i18next";
import { Button, Modal, Input } from 'antd';
import {Link} from 'react-router'
import axios from 'axios'
import left from "/left.svg";

const Category = () => {
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
    
    <div className="bg-[#F0F4FA] ">
      <section className='w-full sn:h-[420px] rounded-2xl flex items-center justify-between  bg-white my-[100px]'>
<article className='flex items-start p-[10px] flex-col gap-[60px]'>
  <div>
    <p className='text-[20px] text-[#4D5F7D]'>{t("Category.section1.text1")}</p>
    <p className='text-[48px] font-[600]'>{t("Category.section1.text2")}</p>
  </div>


<div className='sm:w-[700px] flex items-center flex-wrap gap-[10px] justify-start '>

<p className='bg-[#E3EAF7] rounded-2xl p-[5px]'>{t("Category.section1.text3")}</p>
<p className='bg-[#E3EAF7] rounded-2xl p-[5px]'>{t("Category.section1.text4")}</p>
<p className='bg-[#0080FF] text-white rounded-2xl p-[5px]'>{t("Category.section1.text5")}</p>
<p className='bg-[#E3EAF7] rounded-2xl p-[5px]'>{t("Category.section1.text6")}</p>
<p className='bg-[#0080FF] text-white rounded-2xl p-[5px]'>{t("Category.section1.text7")}</p>
<p className='bg-[#0080FF] text-white rounded-2xl p-[5px]'>{t("Category.section1.text8")}</p>
<p className='bg-[#E3EAF7] rounded-2xl p-[5px]'>{t("Category.section1.text9")}</p>
<p className='bg-[#E3EAF7] rounded-2xl p-[5px]'>{t("Category.section1.text10")}</p>
<p className='bg-[#E3EAF7] rounded-2xl p-[5px]'>{t("Category.section1.text11")}</p>
<p className='bg-[#E3EAF7] rounded-2xl p-[5px]'>{t("Category.section1.text12")}</p>
<p className='bg-[#E3EAF7] rounded-2xl p-[5px]'>{t("Category.section1.text13")}</p>
<p className='bg-[#E3EAF7] rounded-2xl p-[5px]'>{t("Category.section1.text14")}</p>
<p className='bg-[#0080FF] text-white rounded-2xl p-[5px]'>{t("Category.section1.text15")}</p>

</div>
</article>
<div className='sm:block hidden'>   
  <img src={rocket} className='absolute z-10' alt="" />
<img className='rounded-2xl z-0 relative' src={bg7} alt="" /></div>
      </section>



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





<section className="w-full rounded-2xl h-[640px] sm:h-[240px] bg-[#0063E5] text-white sm:flex-row flex-col flex items-center justify-around">
<article className="w-[370px] h-[186px] flex flex-col items-start justify-between">
  <p className="text-[32px] font-[600]">{t("Category.section2.text1")}</p>
  <button className="w-[211px] h-[54px] rounded-4xl border border-white">{t("Category.section2.text2")}➡️</button>
</article>
<img src={bg8} alt="" />
</section>





    </div>
  )
}

export default Category