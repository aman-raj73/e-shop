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

let all_product = [
    {
        id : 1,
        name : "Cap Shirt",
        category : "casual",
        image : casual,
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi delectus reprehenderit eaque id consectetur natus aspernatur, inventore dolorum nulla eos",
        old_price : 1600,
        new_price : 1200
    },
    {
        id : 2,
        name : "White Printed Top",
        category : "casual",
        image : casual1,
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi delectus reprehenderit eaque id consectetur natus aspernatur, inventore dolorum nulla eos",
        old_price : 900,
        new_price : 700
    },
    {
        id : 3,
        name : "Plazo Set",
        category : "casual",
        image : casual2,
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi delectus reprehenderit eaque id consectetur natus aspernatur, inventore dolorum nulla eos",
        old_price : 1200,
        new_price : 900
    },
    {
        id : 4,
        name : "Kids Set",
        category : "casual",
        image : casual3,
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi delectus reprehenderit eaque id consectetur natus aspernatur, inventore dolorum nulla eos",
        old_price : 799,
        new_price : 599
    },
    {
        id : 5,
        name : "Tshirt Trouser",
        category : "summer",
        image : summer,
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi delectus reprehenderit eaque id consectetur natus aspernatur, inventore dolorum nulla eos",
        old_price : 1100,
        new_price : 900
    },
    {
        id : 6,
        name : "Half Shirt with Nikker",
        category : "summer",
        image : summer1,
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi delectus reprehenderit eaque id consectetur natus aspernatur, inventore dolorum nulla eos",
        old_price : 900,
        new_price : 700
    },
    {
        id : 7,
        name : "Sleeve Less Top",
        category : "summer",
        image : summer2,
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi delectus reprehenderit eaque id consectetur natus aspernatur, inventore dolorum nulla eos",
        old_price : 700,
        new_price : 599
    },
    {
        id : 8,
        name : "Half Shirt-Half Pant",
        category : "summer",
        image : summer3,
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi delectus reprehenderit eaque id consectetur natus aspernatur, inventore dolorum nulla eos",
        old_price : 799,
        new_price : 599
    },
    {
        id : 9,
        name : "Jacket",
        category : "winter",
        image : winter,
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi delectus reprehenderit eaque id consectetur natus aspernatur, inventore dolorum nulla eos",
        old_price : 1600,
        new_price : 1200
    },
    {
        id : 10,
        name : "Hoodie",
        category : "winter",
        image : winter1,
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi delectus reprehenderit eaque id consectetur natus aspernatur, inventore dolorum nulla eos",
        old_price : 900,
        new_price : 700
    },
    {
        id : 11,
        name : "Sweater-pant",
        category : "winter",
        image : winter2,
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi delectus reprehenderit eaque id consectetur natus aspernatur, inventore dolorum nulla eos",
        old_price : 900,
        new_price : 600
    },
    {
        id : 12,
        name : "Kids Dungry",
        category : "winter",
        image : winter3,
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi delectus reprehenderit eaque id consectetur natus aspernatur, inventore dolorum nulla eos",
        old_price : 799,
        new_price : 599
    },
    {
        id : 13,
        name : "Kids Set-hat",
        category : "western",
        image : western,
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi delectus reprehenderit eaque id consectetur natus aspernatur, inventore dolorum nulla eos",
        old_price : 1100,
        new_price : 900
    },
    {
        id : 14,
        name : "Short Set With Hat",
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
        image : western2,
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi delectus reprehenderit eaque id consectetur natus aspernatur, inventore dolorum nulla eos",
        old_price : 1700,
        new_price : 1499
    },
    {
        id : 16,
        name : "Shirt with half Jacket set",
        category : "western",
        image : western3,
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi delectus reprehenderit eaque id consectetur natus aspernatur, inventore dolorum nulla eos",
        old_price : 1999,
        new_price : 1599
    },
    {
        id : 17,
        name : "Cap Shirt",
        category : "casual",
        image : casual,
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi delectus reprehenderit eaque id consectetur natus aspernatur, inventore dolorum nulla eos",
        old_price : 1600,
        new_price : 1200
    },
    {
        id : 18,
        name : "White Printed Top",
        category : "casual",
        image : casual1,
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi delectus reprehenderit eaque id consectetur natus aspernatur, inventore dolorum nulla eos",
        old_price : 900,
        new_price : 700
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
        name : "Kids Set",
        category : "casual",
        image : casual3,
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi delectus reprehenderit eaque id consectetur natus aspernatur, inventore dolorum nulla eos",
        old_price : 799,
        new_price : 599
    },
]
export default all_product


