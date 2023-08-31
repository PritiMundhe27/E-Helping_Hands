import React, { useState, useEffect } from 'react'
import "./style.css"
import Cards from '../../Components/Cards/cards';
import { fetchCategory, fetchNGOs, fetchNGOsFilter } from '../../API/api';

function Dashboard() {
  const [categoryData, setCategoryData] = useState(null);
  const [selectCategory, setSelectCategory] = useState('');
  const [ngoData, setNgoData] = useState(null);

  useEffect(() => {
    async function getCategoryData(){
      const data = await fetchCategory();
      setCategoryData(data);
    }
    getCategoryData()
  }, []);

  useEffect(() => {
    async function getNgoData(){
      const data = await fetchNGOs();
      setNgoData(data);
    }
    async function getNgoDataCategoryFilter(){
      const data = await fetchNGOsFilter(selectCategory);
      setNgoData(data);
    }
    if (selectCategory) {
      getNgoDataCategoryFilter()
    }
    else{
      getNgoData()
    }
  }, [selectCategory]);
  return (
    <>
      <div className="filters">
        <div className="category">
          <select name="" id="" onChange={(e)=>setSelectCategory(e.target.value)}>
            <option value="">Select category</option>
            {categoryData && categoryData?.map((data, i) => {
              return (
                <option key={i} value={data}>{data}</option>
              )
            })}
          </select>
          <select defaultValue="Newly_added" name="" id="">
            <option value="Newly_added" >Newly added</option>
            <option value="">Important</option>
            <option value="">Closet to goal</option>
            <option value="">About to End</option>
          </select>
        </div>
        {/* <div className="search">
          <input type="text" placeholder='Search...' />
        </div> */}
      </div>

      <div className='cards'>
        {ngoData && ngoData.map((data,i)=>{
          return <Cards key={i} data={data}/>
        })}
      </div>
    </>
  )
}

export default Dashboard