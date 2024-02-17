import { createContext, useReducer } from "react";

export const accountContext = createContext({
  value: [],
});

const AccountReducer = (currVal, action) => {
  return currVal;
};

const AccountContextProvider = ({ children }) => {
  const [value, dispatchValue] = useReducer(AccountReducer, LANGUAGE_VALUE);
  return (
    <accountContext.Provider value={{ value }}>
      {children}
    </accountContext.Provider>
  );
};

const LANGUAGE_VALUE = [
  {
    engMyDeposit: "My Deposit",
    engDirectBusiness: "Direct Business",
    engMyTeam: "My Team",
    enTotalReward: "Total Reward",
    enSponAddress: "Sponsor's Address",
    enReferralLink: "Your Referral Link",
    enNeedToRegister: "need to register",
  },
  {
    rusMyDeposit: "Мой депозит",
    rusUsdt: "0 долларов США",
    rusDirectBusiness: "Прямой бизнес",
    rusMyTeam: "Моя команда",
    rusTotalReward: "Общая награда",
    rusSponAddress: "Адрес спонсора",
    rusReferralLink: "Ваша реферальная ссылка",
    rusNeedToRegister: "Отзывать",
  },
  {
    engMyDeposit: "Mi deposito",
    engDirectBusiness: "Negocio directo",
    engMyTeam: "Mi equipo",
    enTotalReward: "Recompensa Total",
    enSponAddress: "Dirección del patrocinador",
    enReferralLink: "Tu enlace de referencia",
    enNeedToRegister: "Retirar",
  },
];

export default AccountContextProvider;
