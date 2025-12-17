import type { BuyerFormData } from "../../interface/components";

export const buyerRegisterMapper = (data: BuyerFormData) => {
  return {
    firstName: data.firstName,
    lastName: data.lastName,
    mobileNumber: data.mobileNumber,
    email: data.email, // <-- Use email (NOT businessEmail)
    password: data.password,
    aadhaarNumber: data.aadhaarNumber ?? "", // if you add in future
    panNumber: data.panNumber,

    buyerDetails: {
      companyName: data.companyName,
      companyType: data.companyType,
      businessEmail: data.businessEmail,
      gstNumber: data.gstNumber,
      businessPhone: data.businessPhone,
      designation: data.designation,
      procurementFrequency: data.procurementFrequency,
      annualProcurementVol: data.annualProcurementVol,
    },

    addresses: [
      {
        fullAddress: data.fullAddress || data.businessAddress,
        city: data.city,
        district: data.district,
        state: data.state,
        country: "India",
        pincode: data.pincode,
      },
    ],

    bankDetails: [
      {
        bankName: data.bankName,
        accountHolderName: data.accountHolderName,
        accountNumber: data.accountNumber,
        ifscCode: data.ifscCode,
        branch: data.branchName,
      },
    ],
  };
};
