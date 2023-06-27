import {
  IAddTeamStore,
  IBillingStore,
  IJobOpeningStore,
  ITeamManagementStore,
  IUserManagmentSettingStore,
  IViewProfileStore,
} from "Common/Interfaces/Store"
import { IAuthStore } from "Features/Auth/Interfaces"
import AuthStore from "Features/Auth/Store"
import BillingStore from "Features/Billing/Store"
import JobOpeningStore from "Features/JobOpening/Store"
import AddTeamStore from "Features/TeamManagement/Store/team-management-add"
import TeamManagementStore from "Features/TeamManagement/Store/team-management-main"
import {
  default as UserManagementSettingStore,
  default as ViewProfileStore,
} from "Features/TeamManagement/Store/team-management-profile"

export interface IStore {
  auth: IAuthStore
  addTeam: IAddTeamStore
  teamManagement: ITeamManagementStore
  viewProfile: IViewProfileStore
  billing: IBillingStore
  userManagement: IUserManagmentSettingStore
  jobOpening: IJobOpeningStore
}

const reducers = {
  auth: AuthStore.reducer,
  addTeam: AddTeamStore.reducer,
  teamManagement: TeamManagementStore.reducer,
  viewProfile: ViewProfileStore.reducer,
  billing: BillingStore.reducer,
  userManagement: UserManagementSettingStore.reducer,
  jobOpening: JobOpeningStore.reducer,
}

const actions = {
  ...AuthStore.actions,
  ...TeamManagementStore.actions,
  ...AddTeamStore.actions,
  ...ViewProfileStore.actions,
  ...BillingStore.actions,
  ...UserManagementSettingStore.actions,
  ...JobOpeningStore.actions,
}

export { reducers, actions }
