import React, { useState,useReducer } from "react";
import "./../styles/App.css";


const states = [{
	name : "Madhya Pradesh",
	description:"Madhya Pradesh, a large state in central India, retains landmarks from eras throughout Indian history.",
	city :[{
		name : "Indore",
		description:"Indore is a city in west-central India. It\'s known for the 7-story Rajwada Palace and the Lal Baag Palace, which date back to Indore\'s 19th-century Holkar dynasty.",
		landmarks :[{
			name : "Mhow",
			description:"Dr. Ambedkar Nagar, commonly known as Mhow, is a cantonment in the Indore district in Madhya Pradesh state of India. It is located 23 kilometres south-west of Indore city, towards Mumbai on the old Mumbai-Agra Road.",				
		},{
			name : "Dewas",
			description:"Dewas is a city in the Malwa region of the Indian state of Madhya Pradesh. The municipality was formerly the seat of two princely states during the British Raj, Dewas Junior state and Dewas Senior state, ruled by the Puar clan of Maratha.",
		}]
	},{
		name : "Bhopal",
		description:"DBhopal is a city in the central Indian state of Madhya Pradesh. It\'s one of India\'s greenest city. There are two main lakes, the Upper Lake and the Lower Lake.",
		landmarks :[{
			name : "MANIT",
			description:"Maulana Azad National Institute of Technology Bhopal is a public technical university located in Bhopal, Madhya Pradesh, India. It is part of a group of publicly funded institutions in India known as National Institutes of Technology. ",
		},{
			name: "Berasia",
			description:"Berasia is a landmark and a nagar palika in Bhopal district in the state of Madhya Pradesh, India. ",
		}]
	},{
		name : "Gwalior",
		description:"Gwalior is a city in the central Indian state of Madhya Pradesh. It's known for its palaces and temples, including the Sas Bahu Ka Mandir intricately carved Hindu temple. ",
		landmarks :[{
			name : "Ajaypur",
			description:"Little less known city Ajaypur.",
		}]
	}]
},{
	name : "Jharkhand",
	description:"Jharkhand is a state in eastern India. It's known for its waterfalls, the elegant Jain temples of Parasnath Hill and the elephants and tigers of Betla National Park.",
	city :[{
		name : "Dhanbad",
		description:"Dhanbad is the second-most populated city in the Indian state of Jharkhand. It ranks as the 33rd largest city in India and is the 42nd largest million-plus urban agglomeration in India. It is the 96th fastest growing urban area of the world by the City Mayors Foundation.",
		landmarks :[{
			name : "IIT(ISM) Dhanbad",
			description:"Indian Institute of Technology (Indian School of Mines) Dhanbad is a public technical and research university located in Dhanbad, India. It is an Institute of National Importance. IIT has 18 academic departments covering Engineering,",
		},{
			name : "Hirapur",
			description:"Hirapur is a census landmark in Balaghat district in the Indian state of Madhya Pradesh.",
		}]
	},{
		name : "Wasseypur",
		description:"Wasseypur is a neighbourhood in the city of Dhanbad in Dhanbad Sadar subdivision of Dhanbad district in the state of Jharkhand in India. ",
		landmarks :[{
			name : "Pandey muhalla",
			description:"Located behind the dhanbad junction is must visit place.",
		},{
			name : "MPI Hall",
			description:"Space for everyone",
		}]
	},{
		name : "Hazaribagh",
		description:"Hazaribagh is a city and a municipal corporation in Hazaribagh district in the Indian state of Jharkhand. It is the divisional headquarters of North Chotanagpur division.",
		landmarks :[{
			name : "Shaheed Nirmal Mahto Park",
			description:"Famous for its giant dinosaur structure",
		},{
			name : "Gandhi Maidan",
			description:"Ideal for conduction major events",
		}]
	}]
},{
	name : "Assam",
	description:"Assam is a state in northeastern India known for its wildlife, archeological sites and tea plantations. ",
	city :[{
		name : "Guwhati",
		description:"Guwahati is a sprawling city beside the Brahmaputra River in the northeast Indian state of Assam. It\'s known for holy sites like the hilltop Kamakhya Temple,",
		landmarks :[{
			name : "Ganesh Guri",
			description:"Famous because of PVR city center.",
		},{
			name : "Kalyani Nagar",
			description:"located near famous Lakshmi Nagar",
		}]
	},{
		name : "dimapur",
		description:"Dimapur is a city in Nagaland, India. It is the most populous city of Nagaland and also the most densely populated city in the state with an estimated population of about 250,000.",
		landmarks :[{
			name : "City Tower",
			description:"Giant Tower standing by the road since history.",
		},{
			name : "Sunday Market",
			description:"Famous for its weekend Sale on all items.",
		}]
	},{
		name : "Tezpur",
		description:"Tezpur is a landmark and urban agglomeration in Sonitpur district, Assam state, India. Tezpur is located on the banks of the river Brahmaputra, 175 kilometres northeast of Guwahati, and is the largest of the north bank landmarks with a population exceeding 100,000 as per Metropolitan Census 2011.",
		landmarks :[{
			name : "Bamuni Hills",
			description:"Best location for photoshoots",
		},{
			name : "Bhujkhowa Bazar",
			description:"Central Market for Tezpur",
		}]
	}]
},{
	name : "Bihar",
	description:"Bihar is a state in East India, bordering Nepal. It is divided by the River Ganges, which floods its fertile plains. Important Buddhist pilgrimage sites include the Bodhi Tree in Bodhgaya's Mahabodhi Temple, under which the Buddha allegedly meditated.",
	city :[{
		name : "Patna",
		description:"Patna is an ancient city that sprawls along the south bank of the Ganges River in Bihar, northeast India.",
		landmarks :[{
			name : "Sonpur",
			description:"Sonpur is a city and sub-division in the Indian state of Bihar, situated on the banks of the River Gandak and Ganges River in the Saran District.",
		},{
			name : "Maner",
			description:"Maner also spelled Maner or Maner Sharif, is a satellite landmark in Patna Metropolitan Region, in the Patna district in the Indian state of Bihar. Maner Sharif lies 24 km west of Patna the capital of Bihar on National Highway 30.",
		}]
	},{
		name : "Gaya",
		description:"Gaya is a holy city beside the Falgu River, in the northeast Indian state of Bihar. It\'s known for 18th-century Vishnupad Mandir, a riverside temple with an octagonal shrine. Close by, ancient Mangla Gauri Temple is set on a hilltop. ",
		landmarks :[{
			name : "Bakraur",
			description:"Bakraur, sometimes called Bakrour, is a village located slightly east of Bodh Gaya in the state of Bihar, India. It lies directly across the Phalgu River from the landmark of Bodh Gaya, where Gautama Buddha is said to have attained enlightenment.",
		},{
			name : "Barachatti",
			description:"Barachatti is a block in the Gaya district of Bihar, India. Barachatti contains 141 villages and 13 gram panchayat. Sarwan bazar is the biggest and Nimi is the smallest village of Barachatti. The total population in Barachatti sub-district is 142,534 according to the census during 2011 by Indian Government.",
		}]	
	},{
		name : "Darbhanga",
		description:"Darbhanga is a city and Municipal Corporation in the Indian state of Bihar. It is the 6th largest city of Bihar, only after Patna, Gaya, Bhagalpur, Muzaffarpur and Purnea. It is the headquarters of Darbhanga district and Darbhanga division and was the seat of the Raj Darbhanga and capital of the Mithila region.",
		landmarks :[{
			name : "Singhwara",
			description:"Famous for its Groundnut Market",
		},{
			name : "Jale",
			description:"Famous for its roasted seads market.",
		}]
	}]
}];


function App() 
{
	// Do not alter/remove main div
	const [city,setcity]=useState(states[0].city);
	const [arr,setarr]=useState([
		{name:states[0].name,description:states[0].description},
		{name:states[0].city[0].name,description:states[0].city[0].description},
		{name:states[0].city[0].landmarks[0].name,description:states[0].city[0].landmarks[0].description}
	]);
	const [landmark,setlandmark]=useState(states[0].city[0].landmarks);
	const handlechange=(e)=>{
		e.preventDefault();
		console.log(e.target.value);
		const stateSelelcted=e.target.value;
		const arr=states[stateSelelcted].city;
		setcity(arr);
		setlandmark(arr[0].landmarks);
		setarr(arr=>{
			const temp=[...arr];
			temp[0].name=states[stateSelelcted].name;
			temp[0].description=states[stateSelelcted].description;
			temp[1].name=states[stateSelelcted].city[0].name;
			temp[1].description=states[stateSelelcted].city[0].description;
			temp[2].name=states[stateSelelcted].city[0].landmarks[0].name;
			temp[2].description=states[stateSelelcted].city[0].landmarks[0].description;
			return temp;
		});
		setselelctedarr([stateSelelcted,0,0])
	}
	const handlechangecity=(e)=>{
		console.log(e.target.value);
		e.preventDefault();
		const citySelelcted=e.target.value;
		const arr=city[citySelelcted].landmarks;
		setlandmark(arr);
		setarr(arr=>{
			const temp=[...arr];
			////////////////////////////////////////////
			const arr1=states.filter((item)=>item.name==temp[0].name);
			console.log(arr1);
			temp[1].name=arr1[0].city[citySelelcted].name;
			temp[1].description=arr1[0].city[citySelelcted].description;
			temp[2].name=arr1[0].city[citySelelcted].landmarks[0].name;
			temp[2].description=arr1[0].city[citySelelcted].landmarks[0].description;
			return temp;
		});
	setselelctedarr(selectedarr=>{
		const temp=[...selectedarr];
		temp[1]=citySelelcted;
		temp[2]=0;
		return temp;
	})
	}
	
	const handlechangelandmark=(e)=>{
        const landmarkselected=e.target.value;
		e.preventDefault();
		console.log(e.target.value);
		 setarr(arr=>{
			const temp=[...arr];
			const arr1=states.filter((item)=>item.name==temp[0].name);
			const arr2=arr1[0].city.filter((item)=>item.name==temp[1].name);
			temp[2].name=arr2[0].landmarks[landmarkselected].name;
			temp[2].description=arr2[0].landmarks[landmarkselected].description;
			return temp;
		 })
		setselelctedarr(selectedarr=>{
			const temp=[...selectedarr];
			temp[2]=landmarkselected;
			return temp;
		})
	}
	const [selectedarr,setselelctedarr]=useState([0,0,0]);
	return (
	<div id="main">
		<div>
			<select onChange={handlechange} value={selectedarr[0]} id="state">
				{/* <option value='' style={{display:'none'}} >states</option> */}
				{states.map((item,i)=>{
					// if (i==0) {
					// 	return <option value={i} key={i} selected>{item.name}</option>
					// }
					return <option value={i} key={i}>{item.name}</option>
				})}
			</select>
			
			 <select onChange={handlechangecity} value={selectedarr[1]} id="city">
				{/* <option value='' style={{display:'none'}}>City</option> */}
				{city.map((item,i)=>{
					console.log('hi in city select');
					// if (i==0) {
					// return <option selected value={i} key={i+'a'}>{item.name}</option>
					// }
				return	<option value={i} key={i+'a'}>{item.name}</option>
				})}
			</select> 
			<select id="landmark" value={selectedarr[2]} onChange={handlechangelandmark}>
				{/* <option value='' style={{display:'none'}}>Landmark</option> */}
				{landmark.map((item,i)=>{
					// if (i==0) {
					// 	return <option selected value={i} key={i+'a'}>{item.name}</option>
					// }
				return	<option value={i} key={i+'a'}>{item.name}</option>
				})}
			</select> 
		</div>
		<div className="details" >
          <div  id="state-title" style={{fontWeight:'700'}}>{arr[0].name}</div>
		  <div id="state-description">{arr[0].description}</div>
		</div>
		<div className="details">
          <div id="city-title" style={{fontWeight:'700'}}>{arr[1].name}</div>
		  <div id="city-description">{arr[1].description}</div>
		</div>
		<div className="details">
          <div id="landmark-title" style={{fontWeight:'700'}}>{arr[2].name}</div>
		  <div id="landmark-description">{arr[2].description}</div>
		</div>
	</div>
	);
}


export default App;
