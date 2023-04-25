import industrialArray from "../Logos/IndustrialBusiness";
import infrastructureArray from "../Logos/InfrastructureBusiness";
import commercialArray from "../Logos/CommercialBusiness";
import defenceArray from "../Logos/DefenceBusiness";
import oilGasArray from "../Logos/OilGasBusiness";
import miningArray from "../Logos/MiningBusiness";
import renewablesArray from "../Logos/RenewablesBusiness";
import agricultureArray from "../Logos/FoodAgricultureBusiness";


const cnw = "https://shop.cnw.com.au/";
const cnwEnergy = "http://cnwenergy.com.au/";
const samios = "https://shop.samios.net.au/";
const sherriff = "https://shop.sherriff.com.au/";
const wea = "https://wea-asia.com/";
const bgwt = "https://bgwt.com.au/";
const airAddition = "http://airadditions.com.au/";
const ses = "https://www.sesaustralia.com.au/";
const cableMaker = "http://cablemakers.com.au/";
const mms = "https://mmssafety.com.au/";
const ila = "https://www.innovativelighting.com.au/";
const robert = "http://fergiesbetta.com.au/";
const bgwGS = "http://www.bgwgroup.com.au/technology-solutions";


const industrialLink = [cnw, sherriff, cnwEnergy, samios, ses, bgwt, bgwGS, airAddition, wea, ila];
const infrastructureLink = [cnw, sherriff, cnwEnergy, samios, ses, bgwt, bgwGS, airAddition, wea, ila];
const commercialLink = [cnw, sherriff, samios, bgwt, airAddition, ila, robert];
const defenceLink = [cnw, sherriff, samios, bgwt, airAddition, ila, wea];
const oilGasLink = [cnw, sherriff, cnwEnergy, bgwt, wea];
const miningLink = [cnw, sherriff, cnwEnergy, bgwt, wea];
const renewablesLink = [cnw, sherriff, cnwEnergy, bgwt, wea];
const agricultureLink = [cnw, sherriff, cnwEnergy, bgwt, airAddition, wea]


export default [
    {
        name: "industrial",
        industry: "Industrial",
        logos: industrialArray,
        links: industrialLink,
    },
    {
        name: "infrastructure",
        industry: "Infrastructure",
        logos: infrastructureArray,
        links: infrastructureLink,
    },
    {
        name: "commercial",
        industry: "Commercial and Residential",
        logos: commercialArray,
        links: commercialLink,
    },
    {
        name: "defence",
        industry: "Defence",
        logos: defenceArray,
        links: defenceLink,
    },
    {
        name: "oilGas",
        industry: "Oil and Gas/Petrochemical",
        logos: oilGasArray,
        links: oilGasLink,
    },
    {
        name: "mining",
        industry: "Mining",
        logos: miningArray,
        links: miningLink,
    },
    {
        name: "renewables",
        industry: "Renewables",
        logos: renewablesArray,
        links: renewablesLink,
    },
    {
        name: "agriculture",
        industry: "Food Processing/Agriculture",
        logos: agricultureArray,
        links: agricultureLink,
    },
]