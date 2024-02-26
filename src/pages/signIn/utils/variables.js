
let patient_information = {
  last_name: '',
  first_name: '',
  middle_init:'',
  address:'',
  city:'',
  state:'Select State',
  zip:'',
  cell_phone:'',
  home_phone:'',
  marital_status:'Marital Status',
  dob:'',
  age:'',
  ssn:'',
  gender:'Gender',
  dl_num:'',
  email:''
}

let employer_information = {
  employer_name:'',
  work_phone:'',
  address:'',
  city:'',
  state:'Select State',
  zip:'',
  employment:'Employment'
}

let emergency_release = {
  emergency_contact:'',
  relationship:'',
  phone:'',
  release_name_one:'',
  release_relationship_one:'',
  release_name_two:'',
  release_relationship_two:''
}

let insurance_info = {
  primary_insurance:'',
  prim_id:'',
  prim_group:'',
  secondary_insurance:'',
  sec_id:'',
  sec_group:'',
}

let guarantor_information = {
  relationship:'Relationship',
  last_name:'',
  first_name:'',
  middle_init:'',
  address:'',
  state:'Select State',
  zip:'',
  cell_phone:'',
  home_phone:'',
  acceptance:'',
  date:''
}

let primary_care = {
  name:'',
  phone_number:'',
  prev_surgeon:'',
  surg_phone_num:'',
  referrel:''
}

let informationLists = [
  patient_information,
  employer_information,
  emergency_release,
  insurance_info,
  guarantor_information,
  primary_care
]

export default informationLists