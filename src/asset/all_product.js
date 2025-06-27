import casual from './c.jpeg'
import casual1 from './c1.jpeg'
import casual2 from './c2.jpeg'
import casual3 from './c3.jpeg'
import summer from './s.jpeg'
import summer1 from './s1.jpeg'
import summer2 from './s2.jpeg'
import summer3 from './s3.jpeg'
import winter from './ws.jpeg'
import winter1 from './ws1.jpeg'
import winter2 from './ws2.jpeg'
import winter3 from './ws3.jpeg'
import western from './w.jpeg'
import western1 from './w1.jpeg'
import western2 from './w2.jpeg'
import western3 from './w3.jpeg'
import half1 from './image2.jpeg'
import half2 from './image1.jpeg'
import tshirt1 from './tshirt1.webp'
import tshirt2 from './tshirt2.webp'
import tshirt3 from './tshirt3.webp'
import halfcaptshirt from './halfcaptshirt.webp'
import halftshirt1 from './halftshirt1.webp'
import halftshirt2 from './halftshirt2.webp'
import halftshirt3 from './halftshirt3.webp'
import shopping123 from './shopping123.webp'
import shopping1234 from './shopping1234.webp'
import shopping12345 from './shopping12345.webp'
import shirt from './shirt.avif'
import shirt1 from './shirt1.jpeg'
import shirt2 from './shirt2.jpeg'
import girl from './girl.webp'
import girl1 from './girl1.webp'
import girl2 from './girl2.jpg'
import baby1 from './baby1.webp'
import baby2 from './baby2.webp'
import hello from './hello.webp'
import hello1 from './hello1.webp'
import hello2 from './hello2.webp'
import hello3 from './hello3.avif'
import hello4 from './hello4.avif'
import hello5 from './hello5.avif'
import hello6 from './hello6.avif'
import hello7 from './hello7.avif'
import hello8 from './hello8.avif'
import hello9 from './hello9.jpg'
import hello10 from './hello10.webp'
import hello11 from './hello11.webp'
import main from './main.webp'
import main1 from './main1.webp'
import main2 from './main2.webp'
import main3 from './main3.avif'
import main4 from './main4.avif'
import main5 from './main5.avif'
import main6 from './main6.webp'
import main7 from './main7.webp'
import main8 from './main8.webp'
import main9 from './main9.webp'
import main10 from './main10.webp'
import main11 from './main11.webp'
import { type } from '@testing-library/user-event/dist/type'



let all_product = [
    {
        id : 1,
        name : "Cap Shirt",
        category : "casual",
        type: "men",
        image : casual,
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi delectus reprehenderit eaque id consectetur natus aspernatur, inventore dolorum nulla eos",
        old_price : 1600,
        new_price : 1200
    },
    {
        id : 2,
        name : "White Printed Top",
        category : "casual",
        type: "women",
        image : casual1,
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi delectus reprehenderit eaque id consectetur natus aspernatur, inventore dolorum nulla eos",
        old_price : 900,
        new_price : 700
    },
    {
        id : 3,
        name : "Plazo Set",
        category : "casual",
        type : "kids",
        image : casual2,
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi delectus reprehenderit eaque id consectetur natus aspernatur, inventore dolorum nulla eos",
        old_price : 1200,
        new_price : 900
    },
    {
        id : 4,
        name : "Kids Set",
        category : "casual",
        type : "kids",
        image : casual3,
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi delectus reprehenderit eaque id consectetur natus aspernatur, inventore dolorum nulla eos",
        old_price : 799,
        new_price : 599
    },
    {
        id : 5,
        name : "Tshirt Trouser",
        category : "summer",
        type : "women",
        image : summer,
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi delectus reprehenderit eaque id consectetur natus aspernatur, inventore dolorum nulla eos",
        old_price : 1100,
        new_price : 900
    },
    {
        id : 6,
        name : "Half Shirt",
        category : "summer",
        type : "men",
        image : summer1,
        image1 : half1,
        image2 : half2,
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi delectus reprehenderit eaque id consectetur natus aspernatur, inventore dolorum nulla eos",
        old_price : 900,
        new_price : 700
    },
    {
        id : 7,
        name : "Sleeve Less Top",
        category : "summer",
        type : "kids",
        image : summer2,
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi delectus reprehenderit eaque id consectetur natus aspernatur, inventore dolorum nulla eos",
        old_price : 700,
        new_price : 599
    },
    {
        id : 8,
        name : "Half Shirt-Half Pant",
        category : "summer",
        type : "kids",
        image : summer3,
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi delectus reprehenderit eaque id consectetur natus aspernatur, inventore dolorum nulla eos",
        old_price : 799,
        new_price : 599
    },
    {
        id : 9,
        name : "Jacket",
        category : "winter",
        type : "men",
        image : winter,
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi delectus reprehenderit eaque id consectetur natus aspernatur, inventore dolorum nulla eos",
        old_price : 1600,
        new_price : 1200
    },
    {
        id : 10,
        name : "Hoodie",
        category : "winter",
        type : "women",
        image : winter1,
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi delectus reprehenderit eaque id consectetur natus aspernatur, inventore dolorum nulla eos",
        old_price : 900,
        new_price : 700
    },
    {
        id : 11,
        name : "Sweater-pant",
        category : "winter",
        type : "kids",
        image : winter2,
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi delectus reprehenderit eaque id consectetur natus aspernatur, inventore dolorum nulla eos",
        old_price : 900,
        new_price : 600
    },
    {
        id : 12,
        name : "Kids Dungry",
        category : "winter",
        type : "kids",
        image : winter3,
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi delectus reprehenderit eaque id consectetur natus aspernatur, inventore dolorum nulla eos",
        old_price : 799,
        new_price : 599
    },
    {
        id : 13,
        name : "Kids Set-hat",
        category : "western",
         type : "kids",
        image : western,
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi delectus reprehenderit eaque id consectetur natus aspernatur, inventore dolorum nulla eos",
        old_price : 1100,
        new_price : 900
    },
    {
        id : 14,
        name : "Short Set With Hat",
         type : "kids",
        category : "western",
        image : western1,
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi delectus reprehenderit eaque id consectetur natus aspernatur, inventore dolorum nulla eos",
        old_price : 900,
        new_price : 700
    },
    {
        id : 15,
        name : "Check Shirt-jeans",
        category : "western",
         type : "men",
        image : western2,
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi delectus reprehenderit eaque id consectetur natus aspernatur, inventore dolorum nulla eos",
        old_price : 1700,
        new_price : 1499
    },
    {
        id : 16,
        name : "Shirt with half Jacket set",
        category : "western",
        type : "women",
        image : western3,
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi delectus reprehenderit eaque id consectetur natus aspernatur, inventore dolorum nulla eos",
        old_price : 1999,
        new_price : 1599
    },
    {
        id : 17,
        name : "Shirt",
        category : "western",
        type : "men",
        image : shirt,
        image1 : shirt1,
        image2 : shirt2,
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi delectus reprehenderit eaque id consectetur natus aspernatur, inventore dolorum nulla eos",
        old_price : 1400,
        new_price : 1199
    },
    {
        id : 18,
        name : "White Printed Top",
        category : "casual",
        image : girl,
        image1 : girl1,
        image2 : girl2,
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi delectus reprehenderit eaque id consectetur natus aspernatur, inventore dolorum nulla eos",
        old_price : 1900,
        new_price : 1500
    },
    {
        id : 19,
        name : "Plazo Set",
        category : "casual",
        image : casual2,
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi delectus reprehenderit eaque id consectetur natus aspernatur, inventore dolorum nulla eos",
        old_price : 1200,
        new_price : 900
    },
    {
        id : 20,
        name : "kids Set",
        category : "casual",
        // type :kids,
        image : casual3,
        image1 :baby1.webp,
        imahe2 :baby2.webp,
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi delectus reprehenderit eaque id consectetur natus aspernatur, inventore dolorum nulla eos",
        old_price : 799,
        new_price : 599
    },
    {
        id : 21,
        name : "Half T-Shirt",
        category : "summer",
        type : "men",
        image : tshirt1,
        image1 : tshirt2,
        image2 : tshirt3,
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi delectus reprehenderit eaque id consectetur natus aspernatur, inventore dolorum nulla eos",
        old_price : 1600,
        new_price : 1100
    },
    {
        id : 22,
        name : "Half T-Shirt",
        category : "summer",
        type : "men",
        image :halfcaptshirt,
        image1 : tshirt1,
        image2 : tshirt2,
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi delectus reprehenderit eaque id consectetur natus aspernatur, inventore dolorum nulla eos",
        old_price : 1250,
        new_price : 800
    },
     {
        id : 23,
        name : "Half T-Shirt",
        category : "summer",
        type : "men",
        image : halftshirt1,
        image1 : halftshirt2,
        image2 : halftshirt3,
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi delectus reprehenderit eaque id consectetur natus aspernatur, inventore dolorum nulla eos",
        old_price : 800,
        new_price : 650
    },
    {
        id : 24,
        name : "Half T-Shirt",
        category : "summer",
        type : "men",
        image : shopping123,
        image1 : shopping1234,
        image2 : shopping12345,
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi delectus reprehenderit eaque id consectetur natus aspernatur, inventore dolorum nulla eos",
        old_price : 900,
        new_price : 700
    },
    {
        id : 25,
        name : "Kids sweater",
        category : "winter",
        type : "kids",
        image : hello,
        image1 :hello1,
        image2 : hello2,
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi delectus reprehenderit eaque id consectetur natus aspernatur, inventore dolorum nulla eos",
        old_price : 799,
        new_price : 599
    },
    {
        id : 26,
        name : "Kids sweater",
        category : "winter",
         type : "kids",
        image : hello3,
        image1 :hello4,
        image2 : hello5,
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi delectus reprehenderit eaque id consectetur natus aspernatur, inventore dolorum nulla eos",
        old_price : 1800,
        new_price : 1499
    },
    {
        id : 27,
        name : "Kids sweater",
        category : "winter",
         type : "kids",
        image : hello6,
        image1 :hello7,
        image2 : hello8,
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi delectus reprehenderit eaque id consectetur natus aspernatur, inventore dolorum nulla eos",
        old_price : 1100,
        new_price : 799
    },
    {
        id : 28,
        name : "Kids sweater",
        category : "winter",
         type : "kids",
        image : hello9,
        image1 :hello10,
        image2 : hello11,
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi delectus reprehenderit eaque id consectetur natus aspernatur, inventore dolorum nulla eos",
        old_price : 1399,
        new_price : 990
    },
    {
        id : 29,
        name : "Kids Set-hat",
        category : "western",
         type : "kids",
        image : main,
        image1 : main1,
        image2 : main2,
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi delectus reprehenderit eaque id consectetur natus aspernatur, inventore dolorum nulla eos",
        old_price : 900,
        new_price : 650
    },
    {
        id : 30,
        name : "Kids Set-hat",
        category : "western",
         type : "kids",
        image : main3,
        image1 : main4,
        image2 : main5,
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi delectus reprehenderit eaque id consectetur natus aspernatur, inventore dolorum nulla eos",
        old_price : 1500,
        new_price : 1100
    },
    {
        id : 31,
        name : "Kids Set-hat",
        category : "western",
         type : "kids",
        image : main6,
        image1 : main7,
        image2 : main8,
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi delectus reprehenderit eaque id consectetur natus aspernatur, inventore dolorum nulla eos",
        old_price : 1100,
        new_price : 900
    },
     {
        id : 32,
        name : "Kids Set-hat",
        category : "western",
         type : "kids",
        image : main9,
        image1 : main10,
        image2 : main11,
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi delectus reprehenderit eaque id consectetur natus aspernatur, inventore dolorum nulla eos",
        old_price : 999,
        new_price : 799
    },
   
]
export default all_product


