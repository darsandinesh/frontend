import type { FormData } from "../../interface/components";

export const farmerRegisterMapper = (data: FormData) => {
  return {
    firstName: data.firstName,
    lastName: data.lastName,
    mobileNumber: data.mobileNumber,
    email: data.email,
    password: data.password,
    aadharNumber: data.aadharNumber,
    panNumber: data.panNumber,

    farmerDetails: {
      farmName: data.farmName,
      farmSize: data.farmSize,
    },

    addresses: [
      {
        fullAddress: data.address,
        city: data.district,
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
        branch: "Main Branch",
      },
    ],
  };
};
