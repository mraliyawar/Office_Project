import React, { useContext, useState } from "react";
import { FaRegCopy } from "react-icons/fa6";
import img1 from "../images/logo.png";
import img2 from "../images/lang.png";
import { Link } from "react-router-dom";

const Spanish = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="flex justify-around items-center w-full h-20 bg-[#222222] text-white ">
        <div className="w-[60%] m-10">
          <img src={img1} alt="" className="w-24" />
        </div>

        <div className="flex  justify-around  w-[40%] mr-2">
          {show && (
            <ul className="flex bg-black border-b-[1px] border-b-[#3fd8d6] text-[#3fd8d6] p-2 rounded-xl justify-between w-full cursor-pointer">
              <Link to="/russ">
                <li>Russian</li>
              </Link>
              <Link to="/account">
                <li>English</li>
              </Link>
              <Link to="/spanish">
                <li>Spanish</li>
              </Link>
              <li>Korean</li>
              <li>Nepal</li>
              <li>Bengali</li>
            </ul>
          )}
        </div>

        <div className="w-[6%]  flex justify-end cursor-pointer ">
          <img
            src={img2}
            alt=""
            className="w-10 mr-6"
            onClick={() => setShow(!show)}
          />
        </div>
      </div>

      {/* header ends */}
      <div className="min-h-[60vh] bg-[#222222] bg-cover flex text-white flex-wrap ">
        <div className="card md:mx-3 w-full md:w-[22%] h-[25vh] lg:mx-5 lg:mt-4 ">
          <div className=" border border-[#eb9d37] h-[45%] flex items-center rounded-lg ">
            <h5 className="text-[#eb9d37] text-[1.25rem] ml-4 font-medium">
              Mi deposito
            </h5>
          </div>
          <div>
            <h6 className="ml-4 mt-4 text-[1rem] font-medium">0USDT _</h6>
          </div>
        </div>
        <div className="card w-full md:mx-2 md:w-[22%] h-[25vh] lg:mx-5 lg:mt-4">
          <div className=" border border-[#eb9d37] h-[45%] flex items-center rounded-lg ">
            <h5 className="text-[#eb9d37] text-[1.25rem] ml-4 font-medium">
              Negocio directo
            </h5>
          </div>
          <div>
            <h6 className="ml-4 mt-4 text-[1rem] font-medium">0USDT _</h6>
          </div>
        </div>

        <div className="card w-full md:mx-2 md:w-[22%] h-[25vh] lg:mx-5 lg:mt-4">
          <div className=" border border-[#eb9d37] h-[45%] flex items-center rounded-lg ">
            <h5 className="text-[#eb9d37] text-[1.25rem] ml-4 font-medium">
              Mi equipo
            </h5>
          </div>
          <div>
            <h6 className="ml-4 mt-4 text-[1rem] font-medium">0 </h6>
          </div>
        </div>

        <div className="card w-full md:mx-2 md:w-[22%] h-[25vh] lg:mx-5 lg:mt-4">
          <div className=" border border-[#eb9d37] h-[45%] flex items-center rounded-lg ">
            <h5 className="text-[#eb9d37] text-[1.25rem] ml-4 font-medium">
              Recompensa Total
            </h5>
          </div>
          <div>
            <h6 className="ml-4 mt-4 text-[1rem] font-medium">0USDT _</h6>
          </div>
        </div>

        <div className="card w-full md:min-w-[22%] lg:min-w-[22%]  h-[25vh] mx-5 box-border text-pretty ">
          <div className=" border border-[#eb9d37] h-[45%] flex items-center justify-center rounded-lg ">
            <h5 className="text-[#eb9d37] text-[1.25rem] ml-4 font-medium">
              Dirección del patrocinador
            </h5>
          </div>
          <div
            className="relative  border border-[#eb9d37] break-words h-[55%] flex justify-center items-center p-5 rounded-lg "
            style={{ overflowWrap: "anywhere" }}
          >
            <h6 className=" text-[1rem] font-medium  ">
              6952653584651256456958787545455574545456
            </h6>
          </div>
        </div>
        <div className="card  w-full md:w-[44%]  lg:w-[47%] h-[25vh] mx-5 lg:mt-4">
          <div className=" border  border-[#eb9d37] h-[45%] flex items-center justify-center rounded-lg ">
            <h5 className="text-[#eb9d37] text-[1.25rem] ml-4 font-medium">
              Tu enlace de referencia
            </h5>
          </div>
          <div className="flex justify-around items-center h-[55%] ">
            <h6 className=" text-[1.2rem] font-medium">need to register</h6>
            <FaRegCopy className="cursor-pointer" />
          </div>
        </div>
        {/* md:w-[22%] */}
        <div className="card  w-full md:w-[44%]  lg:w-[47%] h-[25vh] mx-5">
          <div className=" border  border-[#eb9d37] h-[45%] flex items-center justify-center rounded-lg ">
            <h5 className="text-[#eb9d37] text-[1.25rem] ml-4 font-medium">
              Retirar
            </h5>
          </div>
          <div className="flex justify-center items-center  h-[55%]">
            {/* <h6 className="ml-4 mt-4 text-[1rem] font-medium">0 USDT</h6> */}
            <button className="w-[240px] bg-[#bd771c] text-white rounded p-2 text-[1rem] ">
              Retirar
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center bg-[#222222]  p-4">
        <div className="w-full md:w-2/3 h-[50vh] bg-black border border-[#eb9d37] rounded-xl">
          <div className=" border  border-[#eb9d37] h-[30%] flex items-center justify-center rounded-xl ">
            <h5 className="text-[#eb9d37] text-[1.5rem] ml-4 font-medium ">
              DEPÓSITO
            </h5>
          </div>
          <div className="flex flex-col justify-center items-center w-full h-[70%]  ">
            <div className="flex flex-col mt-8 p-5 w-full  justify-around text-white font-medium">
              <p className="">Saldo de billetera</p>
              <p className="">Saldo mático: 0 MATIC Saldo USDT: 0 USDT</p>
              <div className="w-[100%] mt-4 ">
                <input
                  type="text"
                  className="w-full h-10 rounded p-2"
                  placeholder="cantidad"
                />
              </div>
              <div className="w-full flex justify-center items-center mt-4">
                <button className="w-[240px] bg-[#bd771c] text-white border border-[#e79d2f] text-[1rem] p-2 font-normal rounded">
                  DEPÓSITO
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center bg-[#222222]  p-4">
        <div className="w-full md:w-2/3 h-[50vh] bg-black border border-[#eb9d37] rounded-xl mt-6">
          <div className=" border  border-[#eb9d37] h-[30%] flex items-center justify-center rounded-xl ">
            <h5 className="text-[#eb9d37] text-[1.5rem] ml-4 font-medium ">
              DEPÓSITO DE RECOMPENSA EN BILLETERA
            </h5>
          </div>
          <div className="flex flex-col justify-center items-center w-full h-[70%]  ">
            <div className="flex flex-col mt-8 p-5 w-full h-36 justify-around text-white font-medium">
              <p className="">Saldo de la billetera de recompensas: 0</p>
              {/* <p className="">Matic Balance : 0 MATIC USDT Balance : 0 USDT</p> */}
              <div className="w-[100%] mt-4 ">
                <input
                  type="text"
                  className="w-full h-10 rounded p-2"
                  placeholder="cantidad"
                />
              </div>
              <div className="w-full flex justify-center items-center mt-4">
                <button className="w-[240px] bg-[#bd771c] text-white border border-[#e79d2f] text-[1rem] p-2 font-normal rounded">
                  DEPÓSITO
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center bg-[#222222] p-4 ">
        <div className="w-full md:w-2/3 h-[60vh] bg-black border border-[#eb9d37] rounded-xl mt-6 ">
          <div className=" border  border-[#eb9d37] h-[20%] flex items-center justify-center rounded-xl ">
            <h5 className="text-[#eb9d37] text-[1.5rem] ml-4 font-medium ">
              TRANSFERENCIA DE MONEDERO DE RECOMPENSA
            </h5>
          </div>
          <div className="flex flex-col justify-center items-center w-full h-[80%]  ">
            <div className="flex flex-col mt-8 p-5 w-full h-36 justify-around text-white font-medium">
              <p className="">Saldo de la billetera de recompensas: 0</p>
              {/* <p className="">Matic Balance : 0 MATIC USDT Balance : 0 USDT</p> */}
              <div className="w-[100%] mt-4 ">
                <input
                  type="text"
                  className="w-full h-10 rounded p-2"
                  placeholder="cantidad"
                />
              </div>
              <p className="mt-6">Dirección del destinatario</p>
              {/* <p className="">Matic Balance : 0 MATIC USDT Balance : 0 USDT</p> */}
              <div className="w-[100%] mt-4 ">
                <input
                  type="text"
                  className="w-full h-10 rounded p-2"
                  placeholder="amount"
                />
              </div>
              <div className="w-full flex justify-center items-center mt-4">
                <button className="w-[240px] bg-[#bd771c] text-white border border-[#e79d2f] text-[1rem] p-2 font-normal rounded">
                  Transferir
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Spanish;
