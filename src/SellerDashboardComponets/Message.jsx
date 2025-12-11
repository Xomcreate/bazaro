import React from 'react';
import {
  MdOutlineInsertChart,
  MdShoppingCart,
  MdVisibility,
  MdTrendingUp,
  MdDirectionsRun,
} from 'react-icons/md';

const ORANGE = "#FF4500";

function Message() {

  const overviewData = [
    {
      title: 'Total Earnings',
      value: '$12,500.89',
      icon: <MdOutlineInsertChart />,
      trend: '+15.2% vs last month',
      trendColor: 'text-green-600'
    },
    {
      title: 'Total Orders',
      value: '458',
      icon: <MdShoppingCart />,
      trend: '-2.1% vs last month',
      trendColor: 'text-red-600'
    },
    {
      title: 'Product Views',
      value: '18,920',
      icon: <MdVisibility />,
      trend: '+25.8% vs last month',
      trendColor: 'text-green-600'
    },
  ];

  const bestProducts = [
    { rank: 1, name: 'Premium Leather Wallet', sales: 120, revenue: '$3,600' },
    { rank: 2, name: 'Eco-Friendly Water Bottle', sales: 95, revenue: '$1,900' },
    { rank: 3, name: 'Wireless Headphones', sales: 78, revenue: '$5,460' },
  ];

  return (
    <div className="min-h-screen p-8 bg-white text-gray-800">

      {/* HEADER */}
      <header className="flex justify-between items-center pb-4 mb-8 border-b border-gray-300">

        <h1 className="text-3xl font-extrabold" style={{color: ORANGE}}>
          Analytics Dashboard
        </h1>

        <button
          className="px-5 py-2 rounded-lg font-semibold text-white shadow hover:opacity-90"
          style={{ background: ORANGE }}
        >
          Export Report
        </button>
      </header>

      {/* OVERVIEW */}
      <section className="mb-10">

        <h2 className="text-xl font-semibold mb-5 border-l-4 pl-3"
            style={{borderColor: ORANGE, color: ORANGE}}
        >
          Overview
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

          {overviewData.map((data) => (
            <div
              key={data.title}
              className="p-6 bg-white rounded-xl shadow border border-gray-200 hover:shadow-xl transition"
            >
              <div className="flex justify-between items-center mb-3">

                <p className="text-base text-gray-600">{data.title}</p>

                <span className="text-3xl" style={{color: ORANGE}}>
                  {data.icon}
                </span>

              </div>

              <p className="text-4xl font-bold my-2">{data.value}</p>
              <p className={`text-sm font-semibold ${data.trendColor}`}>
                {data.trend}
              </p>
            </div>
          ))}

        </div>
      </section>

      <hr className="my-8 border-gray-300" />

      {/* BEST PRODUCTS */}
      <section className="mb-10">

        <h2 className="text-xl font-semibold mb-5 border-l-4 pl-3"
            style={{borderColor: ORANGE, color: ORANGE}}
        >
          Best Performing Products
        </h2>

        <div className="flex flex-col gap-3">

          {bestProducts.map((product) => (
            <div
              key={product.rank}
              className="flex items-center p-4 bg-gray-50 border-l-4 rounded-md hover:bg-gray-100 transition"
              style={{borderColor: ORANGE}}
            >

              <span className="text-xl font-bold mr-4"
                    style={{color: ORANGE}}
              >
                {product.rank}
              </span>

              <div className="grow">

                <p className="font-bold text-lg">{product.name}</p>

                <p className="text-sm text-gray-600">
                  <strong className="text-black">{product.sales}</strong> Sales |
                  <strong style={{color: ORANGE}}> {product.revenue}</strong> Revenue
                </p>

              </div>

              <MdTrendingUp className="text-green-600 text-3xl" />
            </div>
          ))}

        </div>
      </section>

      <hr className="my-8 border-gray-300"/>

      {/* TRAFFIC */}
      <section>
        <h2 className="text-xl font-semibold mb-5 border-l-4 pl-3"
            style={{borderColor: ORANGE, color: ORANGE}}
        >
          Traffic Insights
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="p-6 bg-white rounded-lg shadow text-center">

            <MdDirectionsRun className="text-5xl mx-auto mb-3"
                             style={{color: ORANGE}}
            />

            <p className="text-3xl font-bold">4,150</p>
            <p className="text-md text-gray-600">Unique Visitors</p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow text-center">

            <MdVisibility className="text-5xl mx-auto mb-3"
                            style={{color: ORANGE}}
            />

            <p className="text-3xl font-bold">6:30 min</p>
            <p className="text-md text-gray-600">Avg. Session Duration</p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow">

            <h3 className="text-lg font-bold pb-2 mb-3 border-b"
                style={{borderColor: ORANGE}}
            >
              Top Traffic Sources
            </h3>

            <ul className="space-y-3">

              {[
                ["Google Search", "45%"],
                ["Direct", "25%"],
                ["Social Media", "20%"],
                ["Other", "10%"]
              ].map((source, i) => (
                <li key={i}
                    className="flex justify-between text-gray-700"
                >
                  <span>{source[0]}</span>
                  <span className="font-bold" style={{color: ORANGE}}>
                    {source[1]}
                  </span>
                </li>
              ))}

            </ul>
          </div>

        </div>
      </section>

    </div>
  );
}

export default Message;
