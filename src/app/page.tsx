
export default function Home() {
  return (
    <div className="p-5">
      <div>
        <h2 className="text-2xl font-bold">
          Mobile Phones and Cool Gadgets
        </h2>
        <div className="py-4">
          <div className="w-64">
            <div className="bg-blue-100 p-5 rounded-xl">
              <img src="/products/iphone.png" alt=""></img>
            </div>

            <div className="mt-2">
              <h3 className="font-bold text-lg">Iphone 14 Pro</h3>
            </div>

            <p className="text-sm mt-2 leading-4"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia similique in enim autem eveniet reprehenderit, fugit, aut illum perspiciatis distinctio cumque consequatur assumenda ipsum iure veritatis, asperiores modi praesentium perferendis.</p>
            <div className=" flex my-2 mx-1">
              <div className="text-2xl font-bold mr-3 grow">$999</div>
              <button className="bg-emerald-500 text white py-1 px-3 rounded-xl">+</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
