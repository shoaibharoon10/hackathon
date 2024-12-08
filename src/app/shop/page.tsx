import Image from "next/image"
import ShopImage from "@/app/assets/shophero.png"
import BlowHero from "@/app/components/ShopBlowHero";

export default function ShopHero(){

    interface Card{
        name: string,
        age: number,
        description: string,
        image: string,
        price: string,
      }

    const data: Card[] = [
        {
          name: 'Syltherine',
          price: "Rp 2.500.000",
          age: 30,
          image: "Abc",
          description: 'Stylish cafe chair',
        },
        {
          name: 'Jane Smith',
          price: "Rp 2.500.000",
          age: 25,
          image: 'https://via.placeholder.com/100',
          description: 'A creative designer who loves creating stunning visuals.',
        },
        {
          name: 'Sam Wilson',
          price: "Rp 2.500.000",
          age: 28,
          image: 'https://via.placeholder.com/100',
          description: 'A software engineer specializing in backend systems.',
        },
        {
          name: 'Sam Wilson',
          price: "Rp 2.500.000",
          age: 28,
          image: 'https://via.placeholder.com/100',
          description: 'A software engineer specializing in backend systems.',
        },
        {
          name: 'Sam Wilson',
          price: "Rp 2.500.000",
          age: 28,
          image: 'https://via.placeholder.com/100',
          description: 'A software engineer specializing in backend systems.',
        },
        {
          name: 'Sam Wilson',
          price: "Rp 2.500.000",
          age: 28,
          image: 'https://via.placeholder.com/100',
          description: 'A software engineer specializing in backend systems.',
        },
        {
          name: 'Sam Wilson',
          price: "Rp 2.500.000",
          age: 28,
          image: 'https://via.placeholder.com/100',
          description: 'A software engineer specializing in backend systems.',
        },
        {
          name: 'Sam Wilson',
          price: "Rp 2.500.000",
          age: 28,
          image: 'https://via.placeholder.com/100',
          description: 'A software engineer specializing in backend systems.',
        },
        {
          name: 'Syltherine',
          price: "Rp 2.500.000",
          age: 30,
          image: "Abc",
          description: 'Stylish cafe chair',
        },
        {
          name: 'Jane Smith',
          price: "Rp 2.500.000",
          age: 25,
          image: 'https://via.placeholder.com/100',
          description: 'A creative designer who loves creating stunning visuals.',
        },
        {
          name: 'Sam Wilson',
          price: "Rp 2.500.000",
          age: 28,
          image: 'https://via.placeholder.com/100',
          description: 'A software engineer specializing in backend systems.',
        },
        {
          name: 'Sam Wilson',
          price: "Rp 2.500.000",
          age: 28,
          image: 'https://via.placeholder.com/100',
          description: 'A software engineer specializing in backend systems.',
        },
        {
          name: 'Sam Wilson',
          price: "Rp 2.500.000",
          age: 28,
          image: 'https://via.placeholder.com/100',
          description: 'A software engineer specializing in backend systems.',
        },
        {
          name: 'Sam Wilson',
          price: "Rp 2.500.000",
          age: 28,
          image: 'https://via.placeholder.com/100',
          description: 'A software engineer specializing in backend systems.',
        },
        {
          name: 'Sam Wilson',
          price: "Rp 2.500.000",
          age: 28,
          image: 'https://via.placeholder.com/100',
          description: 'A software engineer specializing in backend systems.',
        },
        {
          name: 'Sam Wilson',
          price: "Rp 2.500.000",
          age: 28,
          image: 'https://via.placeholder.com/100',
          description: 'A software engineer specializing in backend systems.',
        },
      ];



    return(
        <>
        <div className="shopsect">
        <Image src={ShopImage} alt="Picture of the author" />
            <h3 className="font-bold text-[1.5rem]">Shop</h3>
            <h5 className="shopPara"><span className=" font-bold">Home</span> Shop</h5>
        </div>
                <BlowHero/>
            <div className="cardsContainer">
            {data.map((card, index) => (

            <div className="card" key={index} style={{ width: "15rem" }}>
                <img
                  src={card.image}
                  style={{ width: "18rem", height: "18rem" }}
                  className="card-img-top"
                //   alt={card.name}
                />
                <div className="card-body">
                  <h5 className="card-title" style={{ fontWeight: "bold" }}>
                    {card.name}
                  </h5>
                  <p className="card-text">{card.description}</p>
                  <h5 className="card-title" style={{ fontWeight: "bold" }}>
                    {card.price}
                  </h5>
            </div>
            </div>
                    ))}
            </div>

        </>
    )
}
