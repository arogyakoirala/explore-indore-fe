const tags = {
  school: [{
    section: 'school',
    keyName: 'amenity',
    isVisibleOnPopup: 'FALSE',
    keyLabel: '-',
    isEditable: 'FALSE',
  }, {
    section: 'school',
    keyName: 'name',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Name',
    isEditable: 'TRUE',
  }, {
    section: 'school',
    keyName: 'name:ne',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'नाम',
    isEditable: 'TRUE',
  }, {
    section: 'school',
    keyName: 'operator:type',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Operator Type',
    isEditable: 'TRUE',
  }, {
    section: 'school',
    keyName: 'student:count',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Number of students',
    isEditable: 'TRUE',
  }, {
    section: 'school',
    keyName: 'personnel:count',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Number of employees',
    isEditable: 'TRUE',
  }, {
    section: 'school',
    keyName: 'opening_hours',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Opening Hours',
    isEditable: 'TRUE',
  }, {
    section: 'school',
    keyName: 'contact:phone',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Phone Number',
    isEditable: 'TRUE',
  }, {
    section: 'school',
    keyName: 'contact:email',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Email Address',
    isEditable: 'TRUE',
  }],
  hotel: [{
    section: 'hotel',
    keyName: 'amenity',
    isVisibleOnPopup: 'FALSE',
    keyLabel: '-',
    isEditable: 'FALSE',
  }, {
    section: 'hotel',
    keyName: 'name',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Name',
    isEditable: 'TRUE',
  }, {
    section: 'hotel',
    keyName: 'name:ne',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'नाम',
    isEditable: 'TRUE',
  }, {
    section: 'hotel',
    keyName: 'stars',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Stars',
    isEditable: 'TRUE',
  }, {
    section: 'hotel',
    keyName: 'beds',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Number of beds',
    isEditable: 'TRUE',
  }, {
    section: 'hotel',
    keyName: 'rooms',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Number of rooms',
    isEditable: 'TRUE',
  }, {
    section: 'hotel',
    keyName: 'opening_hours',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Opening Hours',
    isEditable: 'TRUE',
  }, {
    section: 'hotel',
    keyName: 'contact:phone',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Phone Number',
    isEditable: 'TRUE',
  }, {
    section: 'hotel',
    keyName: 'contact:email',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Email Address',
    isEditable: 'TRUE',
  }],
  veterinary: [{
    section: 'veterinary',
    keyName: 'amenity',
    isVisibleOnPopup: 'FALSE',
    keyLabel: '-',
    isEditable: 'FALSE',
  }, {
    section: 'veterinary',
    keyName: 'name',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Name',
    isEditable: 'TRUE',
  }, {
    section: 'veterinary',
    keyName: 'name:ne',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'नाम',
    isEditable: 'TRUE',
  }, {
    section: 'veterinary',
    keyName: 'opening_hours',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Opening Hours',
    isEditable: 'TRUE',
  }, {
    section: 'veterinary',
    keyName: 'contact:phone',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Phone Number',
    isEditable: 'TRUE',
  }, {
    section: 'veterinary',
    keyName: 'contact:email',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Email Address',
    isEditable: 'TRUE',
  }],
  hindu: [{
    section: 'hindu',
    keyName: 'amenity',
    isVisibleOnPopup: 'FALSE',
    keyLabel: '-',
    isEditable: 'FALSE',
  }, {
    section: 'hindu',
    keyName: 'name',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Name',
    isEditable: 'TRUE',
  }, {
    section: 'hindu',
    keyName: 'name:ne',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'नाम',
    isEditable: 'TRUE',
  }, {
    section: 'hindu',
    keyName: 'religion',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Religion',
    isEditable: 'TRUE',
  }, {
    section: 'hindu',
    keyName: 'opening_hours',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Opening Hours',
    isEditable: 'TRUE',
  }, {
    section: 'hindu',
    keyName: 'contact:phone',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Phone Number',
    isEditable: 'TRUE',
  }, {
    section: 'hindu',
    keyName: 'contact:email',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Email Address',
    isEditable: 'TRUE',
  }, {
    section: 'hindu',
    keyName: 'facility:drinking_water',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Drinking Water',
    isEditable: 'TRUE',
  }, {
    section: 'hindu',
    keyName: 'facility:toilet',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Toilet',
    isEditable: 'TRUE',
  }],
  storage_tank: [{
    section: 'storage_tank',
    keyName: 'amenity',
    isVisibleOnPopup: 'FALSE',
    keyLabel: 'Water Storage Tank',
    isEditable: 'FALSE',
  }, {
    section: 'storage_tank',
    keyName: 'name',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Name',
    isEditable: 'TRUE',
  }, {
    section: 'storage_tank',
    keyName: 'name:ne',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'नाम',
    isEditable: 'TRUE',
  }, {
    section: 'storage_tank',
    keyName: 'opening_hours',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Opening Hours',
    isEditable: 'TRUE',
  }, {
    section: 'storage_tank',
    keyName: 'operator:type',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Operator Type',
    isEditable: 'TRUE',
  }],
  water_tap: [{
    section: 'water_tap',
    keyName: 'amenity',
    isVisibleOnPopup: 'FALSE',
    keyLabel: 'Water Storage Tank',
    isEditable: 'FALSE',
  }, {
    section: 'water_tap',
    keyName: 'name',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Name',
    isEditable: 'TRUE',
  }, {
    section: 'water_tap',
    keyName: 'name:ne',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'नाम',
    isEditable: 'TRUE',
  }, {
    section: 'water_tap',
    keyName: 'opening_hours',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Opening Hours',
    isEditable: 'TRUE',
  }, {
    section: 'water_tap',
    keyName: 'operator:type',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Operator Type',
    isEditable: 'TRUE',
  }],
  water_well: [{
    section: 'water_well',
    keyName: 'amenity',
    isVisibleOnPopup: 'FALSE',
    keyLabel: 'Water Storage Tank',
    isEditable: 'FALSE',
  }, {
    section: 'water_well',
    keyName: 'name',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Name',
    isEditable: 'TRUE',
  }, {
    section: 'water_well',
    keyName: 'name:ne',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'नाम',
    isEditable: 'TRUE',
  }, {
    section: 'water_well',
    keyName: 'opening_hours',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Opening Hours',
    isEditable: 'TRUE',
  }, {
    section: 'water_well',
    keyName: 'operator:type',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Operator Type',
    isEditable: 'TRUE',
  }],
  police: [{
    section: 'police',
    keyName: 'amenity',
    isVisibleOnPopup: 'FALSE',
    keyLabel: 'Police',
    isEditable: 'FALSE',
  }, {
    section: 'police',
    keyName: 'name',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Name',
    isEditable: 'TRUE',
  }, {
    section: 'police',
    keyName: 'name:ne',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'नाम',
    isEditable: 'TRUE',
  }, {
    section: 'police',
    keyName: 'opening_hours',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Opening Hours',
    isEditable: 'TRUE',
  }, {
    section: 'police',
    keyName: 'contact:phone',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Phone Number',
    isEditable: 'TRUE',
  }, {
    section: 'police',
    keyName: 'contact:email',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Email Address',
    isEditable: 'TRUE',
  }],
  hospital: [{
    section: 'hospital',
    keyName: 'amenity',
    isVisibleOnPopup: 'FALSE',
    keyLabel: '-',
    isEditable: 'FALSE',
  }, {
    section: 'hospital',
    keyName: 'name',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Name',
    isEditable: 'TRUE',
  }, {
    section: 'hospital',
    keyName: 'name:ne',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'नाम',
    isEditable: 'TRUE',
  }, {
    section: 'hospital',
    keyName: 'operator:type',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Operator Type',
    isEditable: 'TRUE',
  }, {
    section: 'hospital',
    keyName: 'opening_hours',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Opening Hours',
    isEditable: 'TRUE',
  }, {
    section: 'hospital',
    keyName: 'phone',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Phone Number',
    isEditable: 'TRUE',
  }, {
    section: 'hospital',
    keyName: 'contact:email',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Email Address',
    isEditable: 'TRUE',
  }, {
    section: 'hospital',
    keyName: 'emergency',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Emergency Service',
    isEditable: 'TRUE',
  }, {
    section: 'hospital',
    keyName: 'facility:icu',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'ICU',
    isEditable: 'TRUE',
  }, {
    section: 'hospital',
    keyName: 'facility:nicu',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'NICU',
    isEditable: 'TRUE',
  }, {
    section: 'hospital',
    keyName: 'facility:operating_theatre',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Operating Theatre',
    isEditable: 'TRUE',
  }, {
    section: 'hospital',
    keyName: 'facility:x-ray',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'X-Ray',
    isEditable: 'TRUE',
  }, {
    section: 'hospital',
    keyName: 'facility:ambulance',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Ambulance Service',
    isEditable: 'TRUE',
  }, {
    section: 'hospital',
    keyName: 'personnel:count',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Number of Staff',
    isEditable: 'TRUE',
  }, {
    section: 'hospital',
    keyName: 'capacity:beds',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Number of Beds',
    isEditable: 'TRUE',
  }],
  clinic: [{
    section: 'clinic',
    keyName: 'amenity',
    isVisibleOnPopup: 'FALSE',
    keyLabel: '-',
    isEditable: 'FALSE',
  }, {
    section: 'clinic',
    keyName: 'healthcare',
    isVisibleOnPopup: 'FALSE',
    keyLabel: '-',
    isEditable: 'FALSE',
  }, {
    section: 'clinic',
    keyName: 'name',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Name',
    isEditable: 'TRUE',
  }, {
    section: 'clinic',
    keyName: 'name:ne',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'नाम',
    isEditable: 'TRUE',
  }, {
    section: 'clinic',
    keyName: 'contact:phone',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Phone',
    isEditable: 'TRUE',
  }, {
    section: 'clinic',
    keyName: 'contact:email',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Email Address',
    isEditable: 'TRUE',
  }, {
    section: 'clinic',
    keyName: 'opening_hours',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Opening Hours',
    isEditable: 'TRUE',
  }, {
    section: 'clinic',
    keyName: 'healthcare:speciality',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Specialisation',
    isEditable: 'TRUE',
  }],
  health_post: [{
    section: 'health_post',
    keyName: 'amenity',
    isVisibleOnPopup: 'FALSE',
    keyLabel: '-',
    isEditable: 'FALSE',
  }, {
    section: 'health_post',
    keyName: 'name',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Name',
    isEditable: 'TRUE',
  }, {
    section: 'health_post',
    keyName: 'name:ne',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'नाम',
    isEditable: 'TRUE',
  }, {
    section: 'health_post',
    keyName: 'contact:phone',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Phone',
    isEditable: 'TRUE',
  }, {
    section: 'health_post',
    keyName: 'contact:email',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Email Address',
    isEditable: 'TRUE',
  }, {
    section: 'health_post',
    keyName: 'opening_hours',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Opening Hours',
    isEditable: 'TRUE',
  }, {
    section: 'health_post',
    keyName: 'operator:type',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Operator Type',
    isEditable: 'TRUE',
  }],
  pharmacy: [{
    section: 'pharmacy',
    keyName: 'amenity',
    isVisibleOnPopup: 'FALSE',
    keyLabel: '-',
    isEditable: 'FALSE',
  }, {
    section: 'pharmacy',
    keyName: 'name',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Name',
    isEditable: 'TRUE',
  }, {
    section: 'pharmacy',
    keyName: 'name:ne',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'नाम',
    isEditable: 'TRUE',
  }, {
    section: 'pharmacy',
    keyName: 'contact:phone',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Phone',
    isEditable: 'TRUE',
  }, {
    section: 'pharmacy',
    keyName: 'contact:email',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Email Address',
    isEditable: 'TRUE',
  }, {
    section: 'pharmacy',
    keyName: 'opening_hours',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Opening Hours',
    isEditable: 'TRUE',
  }],
  dentist: [{
    section: 'dentist',
    keyName: 'amenity',
    isVisibleOnPopup: 'FALSE',
    keyLabel: '',
    isEditable: 'FALSE',
  }, {
    section: 'dentist',
    keyName: 'name',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Name',
    isEditable: 'TRUE',
  }, {
    section: 'dentist',
    keyName: 'name:ne',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'नाम',
    isEditable: 'TRUE',
  }, {
    section: 'dentist',
    keyName: 'contact:phone',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Phone',
    isEditable: 'TRUE',
  }, {
    section: 'dentist',
    keyName: 'contact:email',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Email Address',
    isEditable: 'TRUE',
  }, {
    section: 'dentist',
    keyName: 'opening_hours',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Opening Hours',
    isEditable: 'TRUE',
  }],
  Veterinarians: [{
    section: 'Veterinarians',
    keyName: 'amenity',
    isVisibleOnPopup: 'FALSE',
    keyLabel: '',
    isEditable: 'FALSE',
  }, {
    section: 'Veterinarians',
    keyName: 'name',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Name',
    isEditable: 'TRUE',
  }, {
    section: 'Veterinarians',
    keyName: 'name:ne',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'नाम',
    isEditable: 'TRUE',
  }, {
    section: 'Veterinarians',
    keyName: 'contact:phone',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Phone',
    isEditable: 'TRUE',
  }, {
    section: 'Veterinarians',
    keyName: 'contact:email',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Email Address',
    isEditable: 'TRUE',
  }, {
    section: 'Veterinarians',
    keyName: 'opening_hours',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Opening Hours',
    isEditable: 'TRUE',
  }],
  government: [{
    section: 'government',
    keyName: 'office',
    isVisibleOnPopup: 'FALSE',
    keyLabel: '',
    isEditable: 'FALSE',
  }, {
    section: 'government',
    keyName: 'name',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Name',
    isEditable: 'TRUE',
  }, {
    section: 'government',
    keyName: 'name:ne',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'नाम',
    isEditable: 'TRUE',
  }, {
    section: 'government',
    keyName: 'contact:phone',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Phone',
    isEditable: 'TRUE',
  }, {
    section: 'government',
    keyName: 'contact:email',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Email Address',
    isEditable: 'TRUE',
  }, {
    section: 'government',
    keyName: 'opening_hours',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Opening Hours',
    isEditable: 'TRUE',
  }],
  ngo: [{
    section: 'ngo',
    keyName: 'office',
    isVisibleOnPopup: 'FALSE',
    keyLabel: '',
    isEditable: 'FALSE',
  }, {
    section: 'ngo',
    keyName: 'name',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Name',
    isEditable: 'TRUE',
  }, {
    section: 'ngo',
    keyName: 'name:ne',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'नाम',
    isEditable: 'TRUE',
  }, {
    section: 'ngo',
    keyName: 'contact:phone',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Phone',
    isEditable: 'TRUE',
  }, {
    section: 'ngo',
    keyName: 'contact:email',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Email Address',
    isEditable: 'TRUE',
  }, {
    section: 'ngo',
    keyName: 'opening_hours',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Opening Hours',
    isEditable: 'TRUE',
  }],
  bank: [{
    section: 'bank',
    keyName: 'amenity',
    isVisibleOnPopup: 'FALSE',
    keyLabel: '',
    isEditable: 'FALSE',
  }, {
    section: 'bank',
    keyName: 'name',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Name',
    isEditable: 'TRUE',
  }, {
    section: 'bank',
    keyName: 'name:ne',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'नाम',
    isEditable: 'TRUE',
  }, {
    section: 'bank',
    keyName: 'contact:phone',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Phone',
    isEditable: 'TRUE',
  }, {
    section: 'bank',
    keyName: 'contact:email',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Email Address',
    isEditable: 'TRUE',
  }, {
    section: 'bank',
    keyName: 'opening_hours',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Opening Hours',
    isEditable: 'TRUE',
  }, {
    section: 'bank',
    keyName: 'operator:type',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Operator Type',
    isEditable: 'TRUE',
  }, {
    section: 'bank',
    keyName: 'nrb_class',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Bank Classfication',
    isEditable: 'TRUE',
  }, {
    section: 'bank',
    keyName: 'atm',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'ATM Available',
    isEditable: 'TRUE',
  }],
  fuel: [{
    section: 'fuel',
    keyName: 'amenity',
    isVisibleOnPopup: 'FALSE',
    keyLabel: '',
    isEditable: 'FALSE',
  }, {
    section: 'fuel',
    keyName: 'name',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Name',
    isEditable: 'TRUE',
  }, {
    section: 'fuel',
    keyName: 'name:ne',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'नाम',
    isEditable: 'TRUE',
  }, {
    section: 'fuel',
    keyName: 'contact:phone',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Phone',
    isEditable: 'TRUE',
  }, {
    section: 'fuel',
    keyName: 'contact:email',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Email Address',
    isEditable: 'TRUE',
  }, {
    section: 'fuel',
    keyName: 'opening_hours',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Opening Hours',
    isEditable: 'TRUE',
  }],
  radio: [{
    section: 'radio',
    keyName: 'amenity',
    isVisibleOnPopup: 'FALSE',
    keyLabel: '',
    isEditable: 'FALSE',
  }, {
    section: 'radio',
    keyName: 'studio',
    isVisibleOnPopup: 'FALSE',
    keyLabel: '',
    isEditable: 'FALSE',
  }, {
    section: 'radio',
    keyName: 'name',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Name',
    isEditable: 'TRUE',
  }, {
    section: 'radio',
    keyName: 'name:ne',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'नाम',
    isEditable: 'TRUE',
  }, {
    section: 'radio',
    keyName: 'contact:phone',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Phone',
    isEditable: 'TRUE',
  }, {
    section: 'radio',
    keyName: 'contact:email',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Email Address',
    isEditable: 'TRUE',
  }, {
    section: 'radio',
    keyName: 'opening_hours',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Opening Hours',
    isEditable: 'TRUE',
  }, {
    section: 'radio',
    keyName: 'frequency',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Frequency',
    isEditable: 'TRUE',
  }],
  television: [{
    section: 'television',
    keyName: 'amenity',
    isVisibleOnPopup: 'FALSE',
    keyLabel: '',
    isEditable: 'FALSE',
  }, {
    section: 'television',
    keyName: 'studio',
    isVisibleOnPopup: 'FALSE',
    keyLabel: '',
    isEditable: 'FALSE',
  }, {
    section: 'television',
    keyName: 'name',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Name',
    isEditable: 'TRUE',
  }, {
    section: 'television',
    keyName: 'name:ne',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'नाम',
    isEditable: 'TRUE',
  }, {
    section: 'television',
    keyName: 'contact:phone',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Phone',
    isEditable: 'TRUE',
  }, {
    section: 'television',
    keyName: 'contact:email',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Email Address',
    isEditable: 'TRUE',
  }, {
    section: 'television',
    keyName: 'opening_hours',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Opening Hours',
    isEditable: 'TRUE',
  }],
  newspaper: [{
    section: 'newspaper',
    keyName: 'office',
    isVisibleOnPopup: 'FALSE',
    keyLabel: '',
    isEditable: 'FALSE',
  }, {
    section: 'newspaper',
    keyName: 'name',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Name',
    isEditable: 'TRUE',
  }, {
    section: 'newspaper',
    keyName: 'name:ne',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'नाम',
    isEditable: 'TRUE',
  }, {
    section: 'newspaper',
    keyName: 'contact:phone',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Phone',
    isEditable: 'TRUE',
  }, {
    section: 'newspaper',
    keyName: 'contact:email',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Email Address',
    isEditable: 'TRUE',
  }, {
    section: 'newspaper',
    keyName: 'opening_hours',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Opening Hours',
    isEditable: 'TRUE',
  }],
  college: [{
    section: 'college',
    keyName: 'amenity',
    isVisibleOnPopup: 'FALSE',
    keyLabel: '-',
    isEditable: 'FALSE',
  }, {
    section: 'college',
    keyName: 'name',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Name',
    isEditable: 'TRUE',
  }, {
    section: 'college',
    keyName: 'name:ne',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'नाम',
    isEditable: 'TRUE',
  }, {
    section: 'college',
    keyName: 'operator:type',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Operator Type',
    isEditable: 'TRUE',
  }, {
    section: 'college',
    keyName: 'student:count',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Number of students',
    isEditable: 'TRUE',
  }, {
    section: 'college',
    keyName: 'personnel:count',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Number of employees',
    isEditable: 'TRUE',
  }, {
    section: 'college',
    keyName: 'opening_hours',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Opening Hours',
    isEditable: 'TRUE',
  }, {
    section: 'college',
    keyName: 'contact:phone',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Phone Number',
    isEditable: 'TRUE',
  }, {
    section: 'college',
    keyName: 'contact:email',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Email Address',
    isEditable: 'TRUE',
  }],
  university: [{
    section: 'university',
    keyName: 'amenity',
    isVisibleOnPopup: 'FALSE',
    keyLabel: '-',
    isEditable: 'FALSE',
  }, {
    section: 'university',
    keyName: 'name',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Name',
    isEditable: 'TRUE',
  }, {
    section: 'university',
    keyName: 'name:ne',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'नाम',
    isEditable: 'TRUE',
  }, {
    section: 'university',
    keyName: 'operator:type',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Operator Type',
    isEditable: 'TRUE',
  }, {
    section: 'university',
    keyName: 'student:count',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Number of students',
    isEditable: 'TRUE',
  }, {
    section: 'university',
    keyName: 'personnel:count',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Number of employees',
    isEditable: 'TRUE',
  }, {
    section: 'university',
    keyName: 'opening_hours',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Opening Hours',
    isEditable: 'TRUE',
  }, {
    section: 'university',
    keyName: 'contact:phone',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Phone Number',
    isEditable: 'TRUE',
  }, {
    section: 'university',
    keyName: 'contact:email',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Email Address',
    isEditable: 'TRUE',
  }],
  kindergarten: [{
    section: 'kindergarten',
    keyName: 'amenity',
    isVisibleOnPopup: 'FALSE',
    keyLabel: '-',
    isEditable: 'FALSE',
  }, {
    section: 'kindergarten',
    keyName: 'name',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Name',
    isEditable: 'TRUE',
  }, {
    section: 'kindergarten',
    keyName: 'name:ne',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'नाम',
    isEditable: 'TRUE',
  }, {
    section: 'kindergarten',
    keyName: 'operator:type',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Operator Type',
    isEditable: 'TRUE',
  }, {
    section: 'kindergarten',
    keyName: 'student:count',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Number of students',
    isEditable: 'TRUE',
  }, {
    section: 'kindergarten',
    keyName: 'personnel:count',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Number of employees',
    isEditable: 'TRUE',
  }, {
    section: 'kindergarten',
    keyName: 'opening_hours',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Opening Hours',
    isEditable: 'TRUE',
  }, {
    section: 'kindergarten',
    keyName: 'contact:phone',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Phone Number',
    isEditable: 'TRUE',
  }, {
    section: 'kindergarten',
    keyName: 'contact:email',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Email Address',
    isEditable: 'TRUE',
  }],
  buddhist: [{
    section: 'buddhist',
    keyName: 'amenity',
    isVisibleOnPopup: 'FALSE',
    keyLabel: '-',
    isEditable: 'FALSE',
  }, {
    section: 'buddhist',
    keyName: 'name',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Name',
    isEditable: 'TRUE',
  }, {
    section: 'buddhist',
    keyName: 'name:ne',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'नाम',
    isEditable: 'TRUE',
  }, {
    section: 'buddhist',
    keyName: 'religion',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Religion',
    isEditable: 'TRUE',
  }, {
    section: 'buddhist',
    keyName: 'opening_hours',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Opening Hours',
    isEditable: 'TRUE',
  }, {
    section: 'buddhist',
    keyName: 'contact:phone',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Phone Number',
    isEditable: 'TRUE',
  }, {
    section: 'buddhist',
    keyName: 'contact:email',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Email Address',
    isEditable: 'TRUE',
  }, {
    section: 'buddhist',
    keyName: 'facility:drinking_water',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Drinking Water',
    isEditable: 'TRUE',
  }, {
    section: 'buddhist',
    keyName: 'facility:toilet',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Toilet',
    isEditable: 'TRUE',
  }],
  christian: [{
    section: 'christian',
    keyName: 'amenity',
    isVisibleOnPopup: 'FALSE',
    keyLabel: '-',
    isEditable: 'FALSE',
  }, {
    section: 'christian',
    keyName: 'name',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Name',
    isEditable: 'TRUE',
  }, {
    section: 'christian',
    keyName: 'name:ne',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'नाम',
    isEditable: 'TRUE',
  }, {
    section: 'christian',
    keyName: 'religion',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Religion',
    isEditable: 'TRUE',
  }, {
    section: 'christian',
    keyName: 'opening_hours',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Opening Hours',
    isEditable: 'TRUE',
  }, {
    section: 'christian',
    keyName: 'contact:phone',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Phone Number',
    isEditable: 'TRUE',
  }, {
    section: 'christian',
    keyName: 'contact:email',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Email Address',
    isEditable: 'TRUE',
  }, {
    section: 'christian',
    keyName: 'facility:drinking_water',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Drinking Water',
    isEditable: 'TRUE',
  }, {
    section: 'christian',
    keyName: 'facility:toilet',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Toilet',
    isEditable: 'TRUE',
  }],
  muslim: [{
    section: 'muslim',
    keyName: 'amenity',
    isVisibleOnPopup: 'FALSE',
    keyLabel: '-',
    isEditable: 'FALSE',
  }, {
    section: 'muslim',
    keyName: 'name',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Name',
    isEditable: 'TRUE',
  }, {
    section: 'muslim',
    keyName: 'name:ne',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'नाम',
    isEditable: 'TRUE',
  }, {
    section: 'muslim',
    keyName: 'religion',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Religion',
    isEditable: 'TRUE',
  }, {
    section: 'muslim',
    keyName: 'opening_hours',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Opening Hours',
    isEditable: 'TRUE',
  }, {
    section: 'muslim',
    keyName: 'contact:phone',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Phone Number',
    isEditable: 'TRUE',
  }, {
    section: 'muslim',
    keyName: 'contact:email',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Email Address',
    isEditable: 'TRUE',
  }, {
    section: 'muslim',
    keyName: 'facility:drinking_water',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Drinking Water',
    isEditable: 'TRUE',
  }, {
    section: 'muslim',
    keyName: 'facility:toilet',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Toilet',
    isEditable: 'TRUE',
  }],
  atm: [{
    section: 'atm',
    keyName: 'amenity',
    isVisibleOnPopup: 'FALSE',
    keyLabel: '',
    isEditable: 'FALSE',
  }, {
    section: 'atm',
    keyName: 'network',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Network Supported',
    isEditable: 'TRUE',
  }, {
    section: 'atm',
    keyName: 'opening_hours',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Opening Hours',
    isEditable: 'TRUE',
  }],
  restaurant: [{
    section: 'restaurant',
    keyName: 'amenity',
    isVisibleOnPopup: 'FALSE',
    keyLabel: '',
    isEditable: 'FALSE',
  }, {
    section: 'restaurant',
    keyName: 'name',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Name',
    isEditable: 'TRUE',
  }, {
    section: 'restaurant',
    keyName: 'name:ne',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'नाम',
    isEditable: 'TRUE',
  }],
  museum: [{
    section: 'museum',
    keyName: 'tourism',
    isVisibleOnPopup: 'FALSE',
    keyLabel: '',
    isEditable: 'FALSE',
  }, {
    section: 'museum',
    keyName: 'name',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Name',
    isEditable: 'TRUE',
  }, {
    section: 'museum',
    keyName: 'name:ne',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'नाम',
    isEditable: 'TRUE',
  }, {
    section: 'museum',
    keyName: 'contact:phone',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Phone',
    isEditable: 'TRUE',
  }, {
    section: 'museum',
    keyName: 'contact:email',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Email Address',
    isEditable: 'TRUE',
  }, {
    section: 'museum',
    keyName: 'opening_hours',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Opening Hours',
    isEditable: 'TRUE',
  }],
  park: [{
    section: 'park',
    keyName: 'tourism',
    isVisibleOnPopup: 'FALSE',
    keyLabel: '',
    isEditable: 'FALSE',
  }, {
    section: 'park',
    keyName: 'name',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Name',
    isEditable: 'TRUE',
  }, {
    section: 'park',
    keyName: 'name:ne',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'नाम',
    isEditable: 'TRUE',
  }, {
    section: 'park',
    keyName: 'contact:phone',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Phone',
    isEditable: 'TRUE',
  }, {
    section: 'park',
    keyName: 'contact:email',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Email Address',
    isEditable: 'TRUE',
  }, {
    section: 'park',
    keyName: 'opening_hours',
    isVisibleOnPopup: 'TRUE',
    keyLabel: 'Opening Hours',
    isEditable: 'TRUE',
  }],
};