'use client';
import Image from "next/image";
import { motion } from "framer-motion";
import EarningGrowthChart from "@/components/dashboard/EarningGrowthChart";
import PageContainer from "@/components/container/PageContainer";
import UserSellerChart from "@/components/dashboard/UserSellerChart";
import { cardData, feedbackData } from "@/data/data";

export default function Home() {
  return (
    <PageContainer>
      <div className="flex flex-col gap-4">

        {/* Top Info */}
        <div className="text-[#2B2F29]">
          <div className="flex gap-5">
            {/** Card Data */}
            {cardData.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="flex flex-col justify-between items-center bg-[#FDFDFD] rounded-lg  w-full border border-button"
              >
                <div className="flex justify-between items-center py-8 w-[360px]">

                  <div className="flex items-center gap-2">
                    <div className="bg-[#EFEFEF] p-3 rounded-full">
                      <Image src={item.img} width={25} height={25} alt="/" />
                    </div>
                    <h3 className="text-lg font-medium">{item.title}</h3>
                  </div>

                  <p className={`text-3xl font-semibold ${item.title === "Total Earnings" ? "text-[#00B047]" : "text-[#F27405]"} `}>
                    {item.value}k
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Middle Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex gap-5"
        >
          <div className="flex-1/2">
            <UserSellerChart />
          </div>
          <div className="flex-1/2">
            <EarningGrowthChart />
          </div>
        </motion.div>

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="rounded-md overflow-auto bg-white text-[#333333] space-y-2 border border-button">
            <div className="p-2 px-4 pb-0">
              <h2 className="text-lg font-medium">Recent Users Feedback</h2>
            </div>
            <div className="overflow-scroll h-[31vh] scrl-hide">
              <table className="w-full text-sm text-left">
                <thead className="text-button bg-[#FEF1E6] text-[16px] sticky top-0">
                  <tr>
                    <th className="px-2 py-3 font-normal text-center">S.ID</th>
                    <th className="py-3 font-normal text-center">Sellers</th>
                    <th className="py-3 font-normal text-center">E-mail</th>
                    <th className="py-3 font-normal text-center">Product</th>
                    <th className="py-3 font-normal text-center">Review</th>
                  </tr>
                </thead>
                <tbody>
                  {feedbackData.map((feedback, i) => (
                    <tr key={i} className="odd:bg-gray-100">
                      <td className="px-2 py-3 text-center">{feedback.id}</td>
                      <td className="py-3 text-center">
                        <div className="flex items-center justify-center space-x-2">
                          <Image
                            src={feedback.avatar}
                            alt={feedback.seller}
                            width={200}
                            height={200}
                            className="object-cover w-8 h-8 rounded-lg"
                          />
                          <span>{feedback.seller}</span>
                        </div>
                      </td>
                      <td className="py-3 text-center">{feedback.email}</td>
                      <td className="py-3 text-center">{feedback.product}</td>
                      <td className="py-3 text-center">⭐{feedback.review}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      </div>
    </PageContainer>
  );
}
