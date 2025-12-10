import React, { useState } from 'react';
import { Package, Truck, Home, CheckCircle, Clock, MapPin, XCircle, ChevronLeft } from 'lucide-react';

// --- Mock Order Tracking Data ---
const mockTrackingData = {
  orderId: 'BZR-20250912-002',
  expectedDelivery: 'December 12, 2025',
  currentStatus: 'Out for Delivery',
  trackingNumber: 'AZX1234567890',
  carrier: 'Bazaro Express',
  shipmentUpdates: [
    { time: '11:30 AM', date: 'Dec 12', location: 'Lagos City Hub', status: 'Out for Delivery' },
    { time: '08:00 AM', date: 'Dec 12', location: 'Lagos Sorting Facility', status: 'Arrived at Facility' },
    { time: '07:00 PM', date: 'Dec 11', location: 'Warehouse Dispatch', status: 'In Transit' },
    { time: '02:00 PM', date: 'Dec 10', location: 'Warehouse Dispatch', status: 'Shipped (Tracking number assigned)' },
    { time: '09:00 AM', date: 'Dec 10', location: 'Bazaro HQ', status: 'Order Confirmed' },
  ],
};

// --- Status to Icon Mapping for the Timeline ---
const statusIconMap = {
  'Order Confirmed': Clock,
  'Shipped (Tracking number assigned)': Package,
  'In Transit': Truck,
  'Arrived at Facility': MapPin,
  'Out for Delivery': Home,
  'Delivered': CheckCircle,
  'Cancelled': XCircle,
};

// --- Status Color Mapping ---
const getStatusColor = (status) => {
  switch (status) {
    case 'Out for Delivery':
    case 'Shipped':
    case 'In Transit':
    case 'Arrived at Facility':
      return 'text-blue-600 bg-blue-100';
    case 'Delivered':
      return 'text-green-600 bg-green-100';
    case 'Order Confirmed':
      return 'text-gray-600 bg-gray-100';
    default:
      return 'text-gray-600 bg-gray-100';
  }
};

// --- Progress Line Component ---
const ProgressTimeline = ({ updates }) => {
  const currentStatus = updates[0]?.status; // Most recent update is at index 0
  const statuses = [
    'Order Confirmed', 
    'Shipped (Tracking number assigned)', 
    'In Transit', 
    'Out for Delivery', 
    'Delivered'
  ];

  return (
    <div className="relative flex justify-between items-center py-8">
      {statuses.map((status, index) => {
        const isComplete = updates.some(u => u.status === status);
        const isActive = isComplete && status === currentStatus;
        const Icon = statusIconMap[status] || Clock;
        
        return (
          <React.Fragment key={status}>
            {/* The line connecting the dots */}
            {index > 0 && (
              <div 
                className={`flex-1 h-1 transition-all duration-500 ${isComplete ? 'bg-[#FF4500]' : 'bg-gray-300'}`}
              />
            )}
            
            {/* Circle Node */}
            <div className={`relative flex flex-col items-center justify-center transition-all duration-500 ${isActive ? 'scale-110' : 'scale-100'}`}>
              <div className={`w-10 h-10 rounded-full border-4 flex items-center justify-center shadow-lg ${
                isComplete 
                  ? 'bg-[#FF4500] border-white text-white' 
                  : 'bg-gray-200 border-gray-400 text-gray-500'
              }`}>
                <Icon size={18} />
              </div>
              
              {/* Status Label */}
              <p className={`absolute top-12 text-center text-xs font-semibold w-24 ${
                isActive ? 'text-[#FF4500] font-bold' : 'text-gray-500'
              }`}>
                {status.split(' ')[0]}
              </p>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default function TrackOrders() {
  const data = mockTrackingData;

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Header and Back Button */}
        <div className="mb-8 flex items-center justify-between">
          <button className="flex items-center text-gray-600 hover:text-[#FF4500] transition-colors font-semibold">
            <ChevronLeft size={20} className="mr-2" />
            Back to Orders
          </button>
          <p className="text-sm text-gray-500">Order ID: **{data.orderId}**</p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 md:p-12">
          
          <h1 className="text-3xl font-extrabold text-gray-900 mb-3 flex items-center">
            <Truck size={30} className="text-[#FF4500] mr-2" />
            Track Shipment
          </h1>
          <div className={`inline-block px-4 py-1.5 rounded-full font-bold text-sm mb-8 ${getStatusColor(data.currentStatus)}`}>
            Current Status: {data.currentStatus}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 border-b pb-8">
            
            {/* Expected Delivery */}
            <div className="p-4 bg-orange-50 rounded-xl border border-orange-100">
              <p className="text-sm text-gray-600">Expected Delivery</p>
              <p className="text-2xl font-black text-[#FF4500] mt-1">{data.expectedDelivery}</p>
            </div>

            {/* Tracking Number */}
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
              <p className="text-sm text-gray-600">Tracking Number</p>
              <p className="text-lg font-bold text-gray-900 mt-1">{data.trackingNumber}</p>
            </div>
            
            {/* Carrier */}
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
              <p className="text-sm text-gray-600">Shipping Carrier</p>
              <p className="text-lg font-bold text-gray-900 mt-1">{data.carrier}</p>
            </div>
            
          </div>
          
          {/* Progress Timeline */}
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Shipment Progress</h2>
          <ProgressTimeline updates={data.shipmentUpdates} /> 
          

          {/* Detailed History */}
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6 border-t pt-8">Activity Log</h2>
          
          <div className="space-y-4">
            {data.shipmentUpdates.map((update, index) => {
              const Icon = statusIconMap[update.status] || Clock;
              const isLatest = index === 0;

              return (
                <div key={index} className="flex items-start gap-4 p-4 border rounded-xl bg-gray-50">
                  <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                    isLatest ? 'bg-[#FF4500] text-white shadow-md' : 'bg-gray-300 text-gray-600'
                  }`}>
                    <Icon size={16} />
                  </div>
                  <div>
                    <p className={`text-md font-bold ${isLatest ? 'text-gray-900' : 'text-gray-700'}`}>{update.status}</p>
                    <p className="text-sm text-gray-500 mt-0.5">
                      {update.location} — {update.date} at {update.time}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Contact Support */}
          <div className="mt-12 text-center border-t pt-8">
            <p className="text-gray-600 mb-4">Questions about your shipment?</p>
            <button className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 px-8 rounded-xl transition duration-200 shadow-md">
              Contact Support
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}