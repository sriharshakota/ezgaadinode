const serviceActions = {
    login_successful: 'LG_IN',
    invalid_login: 'INV_LGIN',
    invalid_login_params: 'INV_LGIN_PRMS',
    invalid_fgt_pwd_params: 'INV_FGT_PWD_PRMS',
    req_fgt_pwd: 'FGT_PWD',
    invalid_user: 'INV_USR',
    fgt_pwd_otp_err: 'FGT_PWD_OTP_ERR',
    invalid_otp_params: 'INV_OTP_PRMS',
    otp_expired: 'OTP_EXPRD',
    verify_otp_err: 'OTP_VERFY_ERR',
    verify_otp: 'VERFY_OTP',
    invalid_otp: 'INV_OTP',
    pwd_send_err: 'PWD_SEND_ERR',
    reset_pwd: 'RESET_PWD',
    reset_pwd_err: 'RESER_PWD_ERR',
    add_driver: 'ADD_DRIVER',
    add_driver_err: 'ADD_DRIVER_ERR',
    get_driver_det: 'GET_DRIVER_DET',
    get_driver_det_err: 'GET_DRIVER_DET_ERR',
    update_driver: 'UPDATE_DRIVER',
    update_driver_err: 'UPDATE_DRIVER_ERR',
    get_drivers: 'GET_DRIVERS',
    get_drivers_err: 'GET_DRIVERS_ERR',
    delete_driver: 'DELETE_DRIVER',
    delete_driver_err: 'DELETE_DRIVER_ERR',
    count_driver: 'COUNT_DRIVER',
    count_driver_err: 'COUNT_DRIVER_ERR',
    get_drivers_for_filter: 'GET_DRIVERS_FOR_FILTER',
    get_drivers_for_filter_err: 'GET_DRIVERS_FOR_FILTER_ERR',
    get_event_data: 'GET_EVENT_DATA',
    get_event_data_err: 'GET_EVENT_DATA_ERR',
    get_latest_device_loc: 'GET_LATEST_DEVICE_LOC',
    get_latest_device_loc_err: 'GET_LATEST_DEVICE_LOC_ERR',
    get_srlogistics: 'GET_SRLOGISTICS',
    get_srlogistics_err: 'GET_SRLOGISTICS_ERR',
    get_lat_loc: 'GET_SRLOGISTICS_LAT_LOC',
    get_lat_loc_err: 'GET_SRLOGISTICS_LAT_LOC_ERR',
    get_srlgoistics_reload_data: 'GET_SRLOGISTICS_RELOAD_DATA',
    delete_all: 'DELETE_ALL',
    delete_all_err: 'DELETE_ALL_ERR',
    cre_event_data: 'CRE_EVENT_DATA',
    cre_event_data_err: 'CRE_EVENT_DATA_ERR',
    get_grp_map_events: 'GET_GRP_MAP_EVENTS',
    get_grp_map_events_err: 'GET_GRP_MAP_EVENTS_ERR',
    track_events_by_veh: 'TRACK_EVENTS_BY_VEH',
    track_events_by_veh_err: 'TRACK_EVENTS_BY_VEH_ERR',
    get_account_data: 'GET_ACC_DATA',
    get_account_data_err: 'GET_ACC_DATA_ERR',
    get_account_grp_data: 'GET_ACC_GRP_DATA',
    get_account_grp_data_err: 'GET_ACC_GRP_DATA_ERR',
    add_expense_type: 'ADD_EXPENSE_TYPE',
    add_expense_type_err: 'ADD_EXPENSE_TYPE_ERR',
    get_all_acc_expenses: 'GET_ALL_ACC_EXPENSES',
    get_all_acc_expenses_err: 'GET_ALL_ACC_EXPENSES_ERR',
    get_expense_type: 'GET_EXPENSE_TYPE',
    get_expense_type_err: 'GET_EXPENSE_TYPE_ERR',
    update_expense_type: 'UPDATE_EXPENSE_TYPE',
    update_expense_type_err: 'UPDATE_EXPENSE_TYPE_ERR',
    delete_expense_type: 'DELETE_EXPENSE_TYPE',
    delete_expense_type_err: 'DELETE_EXPENSE_TYPE_ERR',
    count_expense_types: 'COUNT_EXPENSE_TYPES',
    count_expense_types_err: 'COUNT_EXPENSE_TYPES_ERR',
    add_expense: 'ADD_EXPENSE',
    add_expense_err: 'ADD_EXPENSE_ERR',
    get_all_expenses: 'GET_ALL_EXPENSES',
    get_all_expenses_err: 'GET_ALL_EXPENSES_ERR',
    find_expense_by_id: 'FIND_EXPENSE_BY_ID',
    find_expense_by_id_err: 'FIND_EXPENSE_BY_ID_ERR',
    update_expense: 'UPDATE_EXPENSE',
    update_expense_err: 'UPDATE_EXPENSE_ERR',
    del_expense: 'DEL_EXPENSE',
    del_expense_err: 'DEL_EXPENSE_ERR',
    count_expense: 'COUNT_EXPENSE',
    count_expense_err: 'COUNT_EXPENSE_ERR',
    find_total_expenses: 'FIND_TOTAL_EXPENSES',
    find_total_expenses_err: 'FIND_TOTAL_EXPENSES_ERR',
    find_expenses_by_vehs: 'FIND_EXPENSES_BY_VEHS',
    find_expenses_by_vehs_err: 'FIND_EXPENSES_BY_VEHS_ERR',
    find_expenses_by_veh: 'FIND_EXPENSES_BY_VEH',
    find_expenses_by_veh_err: 'FIND_EXPENSES_BY_VEH_ERR',
    share_expense_det_by_email: 'SHARE_EXPENSE_DET_BY_EMAIL',
    share_expense_det_by_email_err: 'SHARE_EXPENSE_DET_BY_EMAIL_ERR',
    dwnld_expense_det: 'DWNLD_EXPENSE_DET',
    dwnld_expense_det_err: 'DWNLD_EXPENSE_DET_ERR',
    dwnld_payable_det_by_party: 'DWNLD_PAYABLE_DET_BY_PARTY',
    dwnld_payable_det_by_party_err: 'DWNLD_PAYABLE_DET_BY_PARTY_ERR',
    get_payable_amnt_by_party: 'GET_PAYABLE_AMNT_BY_PARTY',
    get_payable_amnt_by_party_err: 'GET_PAYABLE_AMNT_BY_PARTY_ERR',
    share_payable_det_by_email: 'SHARE_PAYABLE_DET_BY_EMAIL',
    share_payable_det_by_email_err: 'SHARE_PAYABLE_DET_BY_EMAIL_ERR',
    get_payable_amnt_by_party_id: 'GET_PAYABLE_AMNT_BY_PARTY_ID',
    get_payable_amnt_by_party_id_err: 'GET_PAYABLE_AMNT_BY_PARTY_ID_ERR',
    add_party: 'ADD_PARTY',
    add_party_err: 'ADD_PARTY_ERR',
    get_parties_by_supp: 'GET_SUPPLIES_BY_SUPP',
    get_parties_by_supp_err: 'GET_SUPPLIES_BY_SUPP_ERR',
    get_parties_by_trans: 'GET_PARTIES_BY_TRANS',
    get_parties_by_trans_err: 'GET_PARTIES_BY_TRANS_ERR',
    find_party: 'FIND_PARTY',
    find_party_err: 'FIND_PARTY_ERR',
    update_party: 'UPDATE_PARTY',
    update_party_err: 'UPDATE_PARTY_ERR',
    get_account_parties: 'GET_ACCOUNT_PARTIES',
    get_account_parties_err: 'GET_ACCOUNT_PARTIES_ERR',
    get_all_parties: 'GET_ALL_PARTIES',
    get_all_parties_err: 'GET_ALL_PARTIES_ERR',
    del_party: 'DEL_PARTY',
    del_party_err: 'DEL_PARTY_ERR',
    count_party: 'COUNT_PARTY',
    count_party_err: 'COUNT_PARTY_ERR',
    find_trips_and_pymnts_for_parties: 'FIND_TRIPS_AND_PYMNTS_FOR_PARTIES',
    find_trips_and_pymnts_for_parties_err: 'FIND_TRIPS_AND_PYMNTS_FOR_PARTIES_ERR',
    find_trips_and_pymnts_for_veh: 'FIND_TRIPS_AND_PYMNTS_FOR_VEH',
    find_trips_and_pymnts_for_veh_err: 'FIND_TRIPS_AND_PYMNTS_FOR_VEH_ERR',
    get_all_parties_for_filter: 'GET_ALL_PARTIES_FOR_FILTER',
    get_all_parties_for_filter_err: 'GET_ALL_PARTIES_FOR_FILTER_ERR',
    add_payment: 'ADD_PAYMENT',
    add_payment_err: 'ADD_PAYMENT_ERR',
    get_all_acc_payments: 'GET_ALL_ACC_PAYMENTS',
    get_all_acc_payments_err: 'GET_ALL_ACC_PAYMENTS_ERR',
    update_payments: 'UPDATE_PAYMENTS',
    update_payments_err: 'UPDATE_PAYMENTS_ERR',
    find_payments_recieved: 'FIND_PAYMENTS_RECIEVED',
    find_payments_recieved_err: 'FIND_PAYMENTS_RECIEVED_ERR',
    del_payments_record: 'DEL_PAYMENTS_RECORD',
    del_payments_record_err: 'DEL_PAYMENTS_RECORD_ERR',
    count_payments: 'COUNT_PAYMENTS',
    count_payments_err: 'COUNT_PAYMENTS_ERR',
    get_payments: 'GET_PAYMENTS',
    get_payments_err: 'GET_PAYMENTS_ERR',
    get_total_amnt: 'GET_TOTAL_AMNT',
    get_total_amnt_err: 'GET_TOTAL_AMNT_ERR',
    get_account_due: 'GET_ACCOUNT_DUE',
    get_account_due_err: 'GET_ACCOUNT_DUE_ERR',
    get_dues_by_party: 'GET_DUES_BY_PARTY',
    get_dues_by_party_err: 'GET_DUES_BY_PARTY_ERR',
    share_party_payment_det_by_email: 'SHARE_PARTY_PAYMENT_DET_BY_EMAIL',
    share_party_payment_det_by_email_err: 'SHARE_PARTY_PAYMENT_DET_BY_EMAIL_ERR',
    dwnld_party_payment_det: 'DWNLD_PARTY_PAYMENT_DET',
    dwnld_party_payment_det_err: 'DWNLD_PARTY_PAYMENT_DET_ERR',
    get_roles_err: 'GET_ROLES_ERR',
    get_all_roles: 'GET_ALL_ROLES',
    get_all_roles_err: 'GET_ALL_ROLES_ERR',
    add_trip: 'ADD_TRIP',
    add_trip_err: 'ADD_TRIP_ERR',
    account_trips: 'ACCOUNT_TRIPS',
    account_trips_err: 'ACCOUNT_TRIPS_ERR',
    all_trips: 'ALL_TRIPS',
    all_trips_err: 'ALL_TRIPS_ERR',
    update_trips: 'UPDATE_TRIPS',
    update_trips_err: 'UPDATE_TRIPS_ERR',
    revenue_det_by_veh_email: 'REVENUE_DET_BY_VEH_EMAIL',
    revenue_det_by_veh_email_err: 'REVENUE_DET_BY_VEH_EMAIL_ERR',
    revenue_det_by_veh_dwnld: 'REVENUE_DET_BY_VEH_DWNLD',
    revenue_det_by_veh_dwnld_err: 'REVENUE_DET_BY_VEH_DWNLD_ERR',
    find_trip: 'FIND_TRIP',
    find_trip_err: 'FIND_TRIP_ERR',
    delete_trip: 'DELETE_TRIP',
    delete_trip_err: 'DELETE_TRIP_ERR',
    get_report: 'GET_REPORT',
    get_report_err: 'GET_REPORT_ERR',
    find_total_revenue: 'FIND_TOTAL_REVENUE',
    find_total_revenue_err: 'FIND_TOTAL_REVENUE_ERR',
    find_total_revenue_by_party: 'FIND_TOTAL_REVENUE_BY_PARTY',
    find_total_revenue_by_party_err: 'FIND_TOTAL_REVENUE_BY_PARTY_ERR',
    find_revenue_by_veh: 'FIND_REVENUE_BY_VEHICLE',
    find_revenue_by_veh_err: 'FIND_REVENUE_BY_VEHICLE_ERR',
    find_trips_by_party: 'FIND_TRIPS_BY_PARTY',
    find_trips_by_party_err: 'FIND_TRIPS_BY_PARTY_ERR',
    find_trips_by_veh: 'FIND_TRIPS_BY_VEH',
    find_trips_by_veh_err: 'FIND_TRIPS_BY_VEH_ERR',
    trips_send_email: 'TRIPS_SEND_EMAIL',
    trips_send_email_err: 'TRIPS_SEND_EMAIL_ERR',
    count_trips: 'COUNT_TRIPS',
    count_trips_err: 'COUNT_TRIPS_ERR',
    get_parties_by_trips: 'GET_PARTIES_BY_TRIPS',
    get_parties_by_trips_err: 'GET_PARTIES_BY_TRIPS_ERR',
    looking_for_trip_req: 'LOOKING_FOR_TRIP_REQ',
    looking_for_trip_req_err: 'LOOKING_FOR_TRIP_REQ_ERR',
    add_tru_err: 'ADD_TRU_ERR',
    add_tru: 'ADD_TRU',
    fin_tru: 'FIND_TRU',
    fin_tru_err: 'FIN_TRU_ERR',
    exprd_tru_det_email: 'EXPRD_TRU_DET_EMAIL',
    exprd_tru_det_email_err: 'EXPRD_TRU_DET_EMAIL_ERR',
    exprd_tru_det_dwnld: 'EXPRD_TRU_DET_DWNLD',
    exprd_tru_det_dwnld_err: 'EXPRD_TRU_DET_DWNLD_ERR',
    retrieve_trus: 'RETRIEVE_TRUS',
    retrieve_trus_err: 'RETRIEVE_TRUS_ERR',
    find_exprd_trus: 'FIND_EXPRD_TRUS',
    find_exprd_trus_err: 'FIND_EXPRD_TRUS_ERR',
    find_exprd_trus_count: 'FIND_EXPRD_TRUS_COUNT',
    fitness_expry_trus: 'FITNESS_EXPRY_TRUS',
    fitness_expry_trus_err: 'FITNESS_EXPRY_TRUS_ERR',
    permit_expry_trus: 'PERMIT_EXPRY_TRUS',
    permit_expry_trus_err: 'PERMIT_EXPRY_TRUS_ERR',
    insurance_expry_trus: 'INSURANCE_EXPRY_TRUS',
    insurance_expry_trus_err: 'INSURANCE_EXPRY_TRUS_ERR',
    pollution_expry_trus: 'POLLUTION_EXPRY_TRUS',
    pollution_expry_trus_err: 'POLLUTION_EXPRY_TRUS_ERR',
    tax_expry_trus: 'TAX_EXPRY_TRUS',
    tax_expry_trus_err: 'TAX_EXPRY_TRUS_ERR',
    trus_count: 'TRUS_COUNT',
    trus_count_err: 'TRUS_COUNT_ERR',
    update_tru: 'UPDATE_TRU',
    update_tru_err: 'UPDATE_TRU_ERR',
    del_tru: 'DEL_TRU',
    del_tru_err: 'DEL_TRU_ERR',
    all_trus: 'ALL_TRUS',
    all_trus_err: 'ALL_TRUS_ERR',
    unnassigned_trus: 'UNASSIGNED_TRUS',
    unnassigned_trus_err: 'UNASSIGNED_TRUS_ERR',
    assign_trus: 'ASSIGN_TRUS',
    assign_trus_err: 'ASSIGN_TRUS_ERR',
    unassign_trus: 'UNASSIGN_TRUS',
    unassign_trus_err: 'UNASSIGN_TRUS_ERR',
    get_all_trus_for_filter: 'GET_ALL_TRUS_FOR_FILTER',
    get_all_trus_for_filter_err: 'GET_ALL_TRUS_FOR_FILTER_ERR',
    add_customer_lead: 'ADD_CUSTOMER_LEAD',
    add_customer_lead_err: 'ADD_CUSTOMER_LEAD_ERR',
    get_customer_leads: "GET_CUSTOMER_LEADS",
    get_customer_leads_err: "GET_CUSTOMER_LEADS_ERR",
    update_customer_lead: "UPDATE_CUSTOMER_LEAD",
    update_customer_lead_err: "UPDATE_CUSTOMER_LEAD_ERR",
    delete_customer_lead: "DELETE_CUSTOMER_LEAD",
    delete_customer_lead_err: "DELETE_CUSTOMER_LEAD_ERR",
    get_customer_lead_details: "GET_CUSTOMER_LEAD_DETAILS",
    get_customer_lead_details_err: "GET_CUSTOMER_LEAD_DETAILS_ERR",
    get_truck_locations: 'GET_TRUCK_LOCATIONS',
    get_truck_locations_err: 'GET_TRUCK_LOCATIONS_ERR',
    add_plan: 'ADD_PLAN',
    add_plan_err: 'ADD_PLAN_ERR',
    get_plan: 'GET_PLAN',
    get_plan_err: 'GET_PLAN_ERR',
    get_plan_details: 'GET_PLAN_DETAILS',
    get_plan_details_err: 'GET_PLAN_DETAILS_ERR',
    update_plan: 'UPDATE_PLAN',
    update_plan_err: 'UPDATE_PLAN_ERR',
    delete_plan: 'DELETE_PLAN',
    delete_plan_err: 'DELETE_PLAN_ERR',
    count_employee: 'COUNT_EMPLOYEE',
    count_employee_err: 'COUNT_EMPLOYEE_ERR',
    add_employee: 'ADD_EMPLOYEE',
    add_employee_err: 'ADD_EMPLOYEE_ERR',
    get_employee: 'GET_EMPLOYEE',
    get_employee_err: 'GET_EMPLOYEE_ERR',
    get_employee_details: 'GET_EMPLOYEE_DETAILS',
    get_employee_details_err: 'GET_EMPLOYEE_DETAILS_ERR',
    update_employee: 'UPDATE_EMPLOYEE',
    update_employee_err: 'UPDATE_EMPLOYEE_ERR',
    delete_employee: 'DELETE_EMPLOYEE',
    delete_employee_err: 'DELETE_EMPLOYEE_ERR',
    count_role: 'COUNT_ROLE',
    count_role_err: 'COUNT_ROLE_ERR',
    add_role: 'ADD_ROLE',
    add_role_err: 'ADD_ROLE_ERR',
    get_role: 'GET_ROLE',
    get_role_err: 'GET_ROLE_ERR',
    get_role_details: 'GET_ROLE_DETAILS',
    get_role_details_err: 'GET_ROLE_DETAILS_ERR',
    update_role: 'UPDATE_ROLE',
    update_role_err: 'UPDATE_ROLE_ERR',
    delete_role: 'DELETE_ROLE',
    delete_role_err: 'DELETE_ROLE_ERR',
    count_franchise: 'COUNT_FRANCHISE',
    count_franchise_err: 'COUNT_FRANCHISE_ERR',
    add_franchise: 'ADD_FRANCHISE',
    add_franchise_err: 'ADD_FRANCHISE_ERR',
    get_franchise: 'GET_FRANCHISE',
    get_franchise_err: 'GET_FRANCHISE_ERR',
    get_franchise_details: 'GET_FRANCHISE_DETAILS',
    get_franchise_details_err: 'GET_FRANCHISE_DETAILS_ERR',
    update_franchise: 'UPDATE_FRANCHISE',
    update_franchise_err: 'UPDATE_FRANCHISE_ERR',
    delete_franchise: 'DELETE_FRANCHISE',
    delete_franchise_err: 'DELETE_FRANCHISE_ERR',
    add_device_err: 'ADD_DEVICE_ERR',
    add_device: 'ADD_DEVICE',
    edit_device_err: 'EDIT_DEVICE_ERR',
    edit_device: 'EDIT_DEVICE',
    get_devices_err: 'GET_DEVICES_ERR',
    get_devices: 'GET_DEVICES',
    get_device_err: 'GET_DEVICE_ERR',
    get_device: 'GET_DEVICE',
    transfer_device: 'TRANSFER_DEVICE',
    transfer_device_err: 'TRANSFER_DEVICE_ERR',
    assign_device: 'ASSIGN_DEVICE',
    assign_device_err: 'ASSIGN_DEVICE_ERR',
    add_Plan_to_device: 'ADD_PLAN_TO_DEVICE',
    add_Plan_to_device_err: 'ADD_PLAN_TO_DEVICE_ERR',
    device_count: 'DEVICE_COUNT',
    device_count_err: 'DEVICE_COUNT_ERR',
    remove_device: 'REMOVE_DEVICE',
    remove_device_err: 'REMOVE_DEVICE_ERR',
    get_device_plan_history_err: 'GET_DEVICE_PLAN_HISTORY_ERR',
    get_device_plan_history: 'GET_DEVICE_PLAN_HISTORY',
    get_truck_owners_list: 'GET_TRUCK_OWNERS_LIST',
    get_truck_owners_list_err: 'GET_TRUCK_OWNERS_LIST_ERR',
    count_customer_leads: 'COUNT_CUSTOMER_LEADS',
    count_customer_leads_err: 'COUNT_CUSTOMER_LEADS_ERR',
    count_truck_types: 'COUNT_TRUCK_TYPES',
    count_truck_types_err: 'COUNT_TRUCK_TYPES_ERR',
    count_goods_types: 'COUNT_GOODS_TYPES',
    count_goods_types_err: 'COUNT_GOODS_TYPES_ERR',
    count_load_types: 'COUNT_LOAD_TYPES',
    count_load_types_err: 'COUNT_LOAD_TYPES_ERR',
    count_truck_request: 'COUNT_TRUCK_REQUEST',
    count_truck_request_err: 'COUNT_TRUCK_REQUEST_ERR',
    dropdown_role: 'DROPDOWN_ROLE',
    dropdown_role_err: 'DROPDOWN_ROLE_ERR',
    dropdown_franchise: 'DROPDOWN_FRANCHISE',
    dropdown_franchise_err: 'DROPDOWN_FRANCHISE_ERR',
    add_account: 'ADD_ACCOUNT',
    add_account_err: 'ADD_ACCOUNT_ERR',
    get_accounts: 'GET_ACCOUNTS',
    get_accounts_err: 'GET_ACCOUNTS_ERR',
    get_all_accounts: 'GET_ALL_ACCOUNTS',
    get_all_accounts_err: 'GET_ALL_ACCOUNTS_ERR',
    get_account_details: 'GET_ACCOUNT_DETAILS',
    get_account_details_err: 'GET_ACCOUNT_DETAILS_ERR',
    update_account: 'UPDATE_ACCOUNT',
    update_account_err: 'UPDATE_ACCOUNT_ERR',
    delete_account: 'DELETE_ACCOUNT',
    delete_account_err: 'DELETE_ACCOUNT_ERR',
    count_accounts: 'COUNT_ACCOUNTS',
    count_accounts_err: 'COUNT_ACCOUNTS_ERR',
    erp_dashboard_content: 'ERP_DASHBOARD_CONTENT',
    erp_dashboard_content_err: 'ERP_DASHBOARD_CONTENT_ERR',
    get_profile: 'GET_PROFILE',
    get_profile_err: 'GET_PROFILE_ERR',
    add_acc_grp: 'ADD_ACC_GRP',
    add_acc_grp_err: 'ADD_ACC_GRP_ERR',
    count_acc_grps: 'COUNT_ACC_GRPS',
    count_acc_grps_err: 'COUNT_ACC_GRPS_ERR',
    get_all_acc_grps: 'GET_ALL_ACC_GRPS',
    get_all_acc_grps_err: 'GET_ALL_ACC_GRPS_ERR',
    get_acc_grp: 'GET_ACC_GRP',
    get_acc_grp_err: 'GET_ACC_GRP_ERR',
    update_acc_grp: 'UPDATE_ACC_GRP',
    update_acc_grp_err: 'UPDATE_ACC_GRP_ERR',
    upld_usr_profile_pic: 'UPLD_USR_PROFILE_PIC',
    upld_usr_profile_pic_err: 'UPLD_USR_PROFILE_PIC_ERR',
    get_erp_settings: 'GET_ERP_SETTINGS',
    get_erp_settings_err: 'GET_ERP_SETTINGS_ERR',
    update_erp_settings: 'UPDATE_ERP_SETTINGS',
    update_erp_settings_err: 'UPDATE_ERP_SETTINGS_ERR',
    cre_key_pair: 'CRE_KEY_PAIR',
    cre_key_pair_err: 'CRE_KEY_PAIR_ERR',
    del_key_pair: 'DEL_KEY_PAIR',
    del_key_pair_err: 'DEL_KEY_PAIR_ERR',
    get_acc_key_pairs: 'GET_ACC_KEY_PAIRS',
    get_acc_key_pairs_err: 'GET_ACC_KEY_PAIRS_ERR',
    get_contact_info: 'GET_CONTACT_INFO',
    get_contact_info_err: 'GET_CONTACT_INFO_ERR',
    count_order_status_err: 'COUNT_ORDER_STATUS_ERR',
    count_order_status: 'COUNT_ORDER_STATUS',
    add_order_status_err: 'ADD_ORDER-STATUS-ERR',
    add_order_status: 'ADD_ORDER-STATUS',
    get_order_status_err: 'GET_ORDER-STATUS-ERR',
    get_order_status: 'GET_ORDER-STATUS',
    get_order_status_details_err: 'GET_ORDER_STATUS_DETAILS_ERR',
    get_order_status_details: 'GET_ORDER_STATUS_DETAILS',
    update_order_status_err: 'UPDATE_ORDER_STATUS_ERR',
    update_order_status: 'UPDATE_ORDER_STATUS',
    delete_order_status_err: 'DELETE_ORDER_STATUS_ERR',
    delete_order_status: 'DELETE_ORDER_STATUS',
    get_notifications_err: 'GET_NOTIFICATIONS_ERR',
    get_notifications: 'GET_NOTIFICATIONS',
    count_notifications_err: 'COUNT_NOTIFICATIONS_ERR',
    count_notifications: 'COUNT_NOTIFICATIONS',
    add_truck_request_quote: 'ADD_TRUCK_REQUEST_QUOTE',
    add_truck_request_quote_err: 'ADD_TRUCK_REQUEST_QUOTE_ERR',
    edit_truck_request_quote: 'EDIT_TRUCK_REQUEST_QUOTE',
    edit_truck_request_quote_err: 'EDIT_TRUCK_REQUEST_QUOTE_ERR',
    delete_truck_request_quote: 'DELETE_TRUCK_REQUEST_QUOTE',
    delete_truck_request_quote_err: 'DELETE_TRUCK_REQUEST_QUOTE_ERR',
    get_truck_request_quotes: 'GET_TRUCK_REQUEST_QUOTES',
    get_truck_request_quotes_err: 'GET_TRUCK_REQUEST_QUOTES_ERR',
    add_load_booking_for_truck_request: 'ADD_LOAD_BOOKING_FOR_TRUCK_REQUEST',
    add_load_booking_for_truck_request_err: 'ADD_LOAD_BOOKING_FOR_TRUCK_REQUEST_ERR',
    get_load_booking_details: 'GET_LOAD_BOOKING_DETAILS',
    get_load_booking_details_err: 'GET_LOAD_BOOKING_DETAILS_ERR',
    get_trucks_and_drivers_by_accountId: 'GET_TRUCKS_AND_DRIVERS_BY_ACCOUNTID',
    get_trucks_and_drivers_by_accountId_err: 'GET_TRUCKS_AND_DRIVERS_BY_ACCOUNTID_ERR',
    add_truck_request_comment: 'ADD_TRUCK_REQUEST_COMMENT',
    add_truck_request_comment_err: 'ADD_TRUCK_REQUEST_COMMENT_ERR',
    get_truck_request_comments: 'GET_TRUCK_REQUEST_COMMENTS',
    get_truck_request_comments_err: 'GET_TRUCK_REQUEST_COMMENTS_ERR',
    update_truck_request: 'UPDATE_TRUCK_REQUEST_DETAILS',
    update_truck_request_err: 'UPDATE_TRUCK_REQUEST_DETAILS_ERR',
    delete_truck_request: "DELETE_TRUCK_REQUEST",
    delete_truck_request_err: "DELETE_TRUCK_REQUEST_ERR",
    add_truck_request: "ADD_TRUCK_REQUEST",
    add_truck_request_err: "ADD_TRUCK_REQUEST_ERR",
    get_truck_request_details: "GET_TRUCK_REQUEST_DETAILS",
    get_truck_request_details_err: "GET_TRUCK_REQUEST_DETAILS_ERR",
    get_total_truck_owners: "GET_TOTAL_TRUCK_OWNERS",
    get_total_truck_owners_err: "GET_TOTAL_TRUCK_OWNERS_ERR",
    change_customer_lead_status: 'CHANGE_CUSTOMER_LEAD_STATUS',
    change_customer_lead_status_err: 'CHANGE_CUSTOMER_LEAD_STATUS_ERR',
    get_truck_owner_details: 'GET_TRUCK_OWNER_DETAILS',
    get_truck_owner_details_err: 'GET_TRUCK_OWNER_DETAILS_ERR',
    update_truck_owner_details: "UPDATE_TRUCK_OWNER_DETAILS",
    update_truck_owner_details_err: "UPDATE_TRUCK_OWNER_DETAILS_ERR",
    delete_truck_owner:"DELETE_TRUCK_OWNER",
    delete_truck_owner_err:"DELETE_TRUCK_OWNER_ERR",

};
module.exports = serviceActions;