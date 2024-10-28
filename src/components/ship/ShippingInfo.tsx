export const ShippingInfo = () => {
  return (
    <div className="max-w-[600px] bg-white border border-gray-300 shadow-md rounded-lg">
      <h2 className="text-l font-semibold text-white bg-topicColor p-[15px]">
        THÔNG TIN THANH TOÁN
      </h2>
      <div className="p-8">
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">
            Họ và tên <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="fullname"
            placeholder="Nhập họ và tên"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 "
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">
            Số điện thoại <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            placeholder="Nhập số điện thoại"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 "
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">
            Địa chỉ <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="address"
            placeholder="Nhập địa chỉ cụ thể. Số nhà, tên đường..."
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 "
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">
            Ghi chú đơn hàng (tùy chọn)
          </label>
          <textarea
            id="notes"
            placeholder="Ghi chú về đơn hàng, ví dụ: thời gian hay chỉ dẫn địa điểm giao hàng chi tiết hơn."
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 "
          ></textarea>
        </div>
        <p className="text-sm text-gray-600">
          Khi cung cấp những thông tin trên, tôi đồng ý với{" "}
          <a href="#" className="text-topicColor underline">
            Chính sách & Quy định chung
          </a>
        </p>
      </div>
    </div>
  );
};
