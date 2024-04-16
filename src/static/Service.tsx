import Image from "next/image";
import { ServiceData } from "../../types/types.d";

const Service = (serviceData : ServiceData) => {
    return <div className="flex min-h-full flex-col desktop:w-1/3 m-4 mobile:w-3/4 p-8 rounded-md transition-colors hover:bg-slate-700">
        <Image 
          src={serviceData.img}
          alt="transition"
          width={100}
          height={100}
          className="w-2/3 h-auto self-center"
        />
        <p className="text-2xl font-bold text-slate-300">
          {serviceData.hl}
        </p>
        <p className="mt-3 text-lg">
          {serviceData.desc}
        </p>
    </div>
}

export default Service;