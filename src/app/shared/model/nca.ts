export interface BusinessContract {
    businessPartnerId:              number;
    businessServiceId:              string;
    begda:                          Date;
    endda:                          Date;
    cost?:                          number;
    description?:                   string;
    businessService?:               BusinessService;
    businessOwner?:                 BusinessOwner;
}

export interface BusinessOwner {
    businessPartnerId:              number;
    begda:                          Date;
    businessPartner?:               BusinessPartner;
    partnerBusinessContracts?:      BusinessContract[];
}

export interface BusinessPartner {
    businessPartnerId:              number;
    caption:                        string;
    webAddress?:                    string;
    hqCountry?:                     string;
    taxCenter?:                     string;
    taxNumber?:                     string;
    isApplicationConfig?:           ApplicationConfig[];
    partnerCertifications?:         PartnerCertification[];
    isSubcontractor?:               Subcontractor[];
    serviceLevelAgreements?:        ServiceLevelAgreement[];
    partnerCredits?:                PartnerCredit[];
    salesAccountBalances?:          SalesAccountBalance[];
    partnerAddresses?:              PartnerAddress[];
    isCustomer?:                    Customer[];
    isVendor?:                      Vendor[];
    isBusinessOwner?:               BusinessOwner[];
}

export interface BusinessService {
    businessServiceId:              string;
    caption:                        string;
    businessServicePages?:          BusinessServicePage[];
    supportAreas?:                  SupportArea[];
    serviceBusinessContracts?:      BusinessContract[];
    partnerServiceAgreements?:      ServiceLevelAgreement[];
    serviceTypes?:                  ServiceType[];
}

export interface BusinessServicePage {
    businessServiceId:              string;
    pagename:                       string;
    businessService?:               BusinessService;
    screenPage?:                    ScreenPage;
}

export interface Customer {
    businessPartnerId:              number;
    begda:                          Date;
    businessPartner?:               BusinessPartner;
    customerSalesOrders?:           SalesOrder[];
}

export interface PartnerAddress {
    businessPartnerId:              number;
    addressId:                      number;
    addressType:                    string;
    street:                         string;
    city:                           string;
    state?:                         string;
    country:                        string;
    phone?:                         string;
    longitude?:                     number;
    latitude?:                      number;
    altitude?:                      number;
    businessPartner?:               BusinessPartner;
    addressPurchaseDeliveries?:     PurchaseDeliveryAddress[];
    rfpDeliveryAddress?:            RequestForProposal[];
    addressOrganizations?:          Organization[];
}

export interface PartnerCertification {
    partnerCertificationId:         number;
    businessPartnerId:              number;
    certificationType:              string;
    issueDate:                      Date;
    expireDate:                     Date;
    level:                          string;
    validationKey:                  string;
    partnerCertificationType?:      PartnerCertificationType;
    businessPartner?:               BusinessPartner;
}

export interface PartnerCertificationType {
    certificationType:              string;
    caption:                        string;
    issuer:                         string;
    validationAddress:              string;
    validity:                       number;
    area:                           string;
    typeCertifications?:            PartnerCertification[];
}

export interface PartnerConversation {
    objectId:                       number;
    objectType:                     string;
    ctime:                          Date;
    seq:                            number;
    fromPartner:                    number;
    toPartner:                      number;
    username:                       string;
    ctext:                          string;
}

export interface PartnerCredit {
    businessPartnerId:              number;
    creditType:                     string;
    balance:                        number;
    businessPartner?:               BusinessPartner;
}

export interface Vendor {
    businessPartnerId:              number;
    begda:                          Date;
    approved:                       string;
    businessPartner?:               BusinessPartner;
    vendorPriceCommitments?:        ProductPriceCommitment[];
    vendorBusinesses?:              VendorBusiness[];
}

export interface VendorBusiness {
    businessPartnerId:              number;
    nodeId:                         number;
    begda:                          Date;
    vendor?:                        Vendor;
}

export interface AccountBalance {
    accountSchemaId:                number;
    currency:                       string;
    refDate:                        Date;
    refYear:                        number;
    refQuarter:                     number;
    refMonth:                       number;
    refDay:                         number;
    refWeek:                        number;
    debit:                          number;
    credit?:                        number;
    accountSchema?:                 AccountSchema;
}

export interface AccountMaster {
    masterAccountCode:              string;
    caption:                        string;
    accountSchemas?:                AccountSchema[];
}

export interface AccountSchema {
    accountSchemaId:                number;
    masterAccountCode:              string;
    ownerId:                        number;
    caption:                        string;
    code:                           string;
    active:                         string;
    costCenter?:                    number;
    defaultObjectType?:             string;
    accountMaster?:                 AccountMaster;
    accountSchemaTemplateItems?:    AccountTxTemplateItem[];
    accountSchemaTransactions?:     AccountTransactionItem[];
    accountBalances?:               AccountBalance[];
}

export interface AccountTransaction {
    transactionId:                  number;
    ownerId:                        number;
    currency:                       string;
    txTimestamp:                    Date;
    txYear:                         number;
    txQuarter:                      number;
    txMonth:                        number;
    txWeek:                         number;
    txDay:                          number;
    documentType?:                  string;
    documentId?:                    number;
    reverseTransaction?:            number;
    description?:                   string;
    accountTransactionItems?:       AccountTransactionItem[];
}

export interface AccountTransactionItem {
    transactionId:                  number;
    accountSchemaId:                number;
    debit:                          number;
    credit:                         number;
    objectType:                     string;
    objectId:                       number;
    accountSchema?:                 AccountSchema;
    accountTransaction?:            AccountTransaction;
}

export interface AccountTransactionTemplate {
    templateId:                     number;
    ownerId:                        number;
    caption:                        string;
    documentType:                   string;
    accountTxTemplateItems?:        AccountTxTemplateItem[];
}

export interface AccountTxTemplateItem {
    templateId:                     number;
    accountSchemaId:                number;
    debitCredit:                    string;
    objectType?:                    string;
    accountTransactionTemplate?:    AccountTransactionTemplate;
    accountSchema?:                 AccountSchema;
}

export interface Bank {
    bankId:                         string;
    country:                        string;
    caption:                        string;
    routing?:                       string;
    bankBranches?:                  BankBranch[];
}

export interface BankAccount {
    iban:                           string;
    swift:                          string;
    ownerId:                        number;
    currency:                       string;
    accountNo?:                     string;
    accountType?:                   string;
    balance?:                       number;
    creditLimit?:                   number;
    bankBranch?:                    BankBranch;
}

export interface BankBranch {
    swift:                          string;
    bankId:                         string;
    branchCode:                     number;
    latitude?:                      number;
    longitude?:                     number;
    altitude?:                      number;
    state?:                         string;
    city?:                          string;
    address?:                       string;
    bank?:                          Bank;
    bankAccounts?:                  BankAccount[];
}

export interface ExchangeRate {
    cdate:                          Date;
    curr1:                          string;
    curr2:                          string;
    rate:                           number;
}

export interface TaxType {
    taxId:                          string;
    caption:                        string;
    country:                        string;
    rate:                           number;
    taxMaterialSales?:              MaterialSaleTax[];
}

export interface ServiceLevelAgreement {
    ownerId:                        number;
    businessServiceId:              string;
    businessPartnerId:              number;
    begda:                          Date;
    endda?:                         Date;
    initialResponse?:               number;
    expertResponse?:                number;
    serviceDays?:                   string;
    serviceHours?:                  string;
    businessPartner?:               BusinessPartner;
    businessService?:               BusinessService;
}

export interface SupportAgent {
    supportGroupId:                 number;
    username:                       string;
    begda:                          Date;
    endda?:                         Date;
    serviceDays?:                   string;
    serviceHours?:                  string;
    workShift?:                     string;
    supportGroup?:                  SupportGroup;
    userAccount?:                   UserAccount;
}

export interface SupportArea {
    supportAreaId:                  number;
    ownerId:                        number;
    businessServiceId:              string;
    caption:                        string;
    businessService?:               BusinessService;
    supportAreaTickets?:            SupportTicket[];
}

export interface SupportGroup {
    supportGroupId:                 number;
    ownerId:                        number;
    caption:                        string;
    supportAgents?:                 SupportAgent[];
    supportGroupTickets?:           SupportTicket[];
}

export interface SupportTicket {
    ticketId:                       number;
    assetName:                      string;
    username:                       string;
    supportAreaId:                  number;
    supportGroupId?:                number;
    supportUser?:                   string;
    issueDate:                      Date;
    priority:                       string;
    ticketType:                     string;
    status:                         string;
    caption:                        string;
    userAccount?:                   UserAccount;
    supportArea?:                   SupportArea;
    supportGroup?:                  SupportGroup;
    supportUserAccount?:            UserAccount;
    supportTicketEvents?:           TicketEvent[];
}

export interface TicketEvent {
    ticketId:                       number;
    eventDate:                      Date;
    username:                       string;
    oldStatus:                      number;
    newStatus:                      number;
    textType?:                      number;
    description?:                   string;
    supportTicket?:                 SupportTicket;
    userAccount?:                   UserAccount;
}

export interface Equipment {
    materialId:                     number;
    serialNo:                       string;
    modelYear:                      number;
    usageType:                      string;
    material?:                      Material;
    equipmentMaintenances?:         Maintenance[];
    equipmentLocations?:            EquipmentLocation[];
    equipmentAttributes?:           EquipmentAttribute[];
    equipmentsPersonAssignments?:   EquipmentAssignment[];
}

export interface EquipmentAssignment {
    personId:                       number;
    materialId:                     number;
    serialNo:                       string;
    begda:                          Date;
    endda:                          Date;
    assignmentType?:                string;
    person?:                        Person;
    equipment?:                     Equipment;
}

export interface EquipmentAttribute {
    materialId:                     number;
    serialNo:                       string;
    magId:                          string;
    value:                          string;
    equipment?:                     Equipment;
    materialAttributeGroup?:        MaterialAttributeGroup;
}

export interface EquipmentLocation {
    materialId:                     number;
    serialNo:                       string;
    organizationId:                 number;
    begda:                          Date;
    endda:                          Date;
    equipment?:                     Equipment;
    organization?:                  Organization;
}

export interface FinalEquipmentPart {
    materialId:                     number;
    materialTypeId:                 string;
    quantity:                       number;
    unit:                           string;
    materialType?:                  MaterialType;
    material?:                      Material;
}

export interface Maintenance {
    materialId:                     number;
    serialNo:                       string;
    serviceDate:                    Date;
    organizationId:                 number;
    labor:                          number;
    charge:                         number;
    equipment?:                     Equipment;
    organization?:                  Organization;
    maintenanceSteps?:              MaintenanceStep[];
    maintenanceCounters?:           MaintenanceCounter[];
}

export interface MaintenanceCounter {
    materialId:                     number;
    serialNo:                       string;
    serviceDate:                    Date;
    counterType:                    string;
    value:                          number;
    mxCounterType?:                 MxCounterType;
    maintenance?:                   Maintenance;
}

export interface MaintenanceStep {
    materialId:                     number;
    serialNo:                       string;
    serviceDate:                    Date;
    materialTypeId:                 string;
    quantity:                       number;
    unit:                           string;
    actionTime:                     Date;
    cost:                           number;
    materialType?:                  MaterialType;
    maintenance?:                   Maintenance;
}

export interface MxCounterInterval {
    serviceTypeId:                  number;
    materialTypeId:                 string;
    counterType:                    string;
    interval:                       number;
    serviceTypeStep?:               ServiceTypeStep;
    mxCounterType?:                 MxCounterType;
}

export interface MxCounterType {
    counterType:                    string;
    caption:                        string;
    mxCounterTypeIntervals?:        MxCounterInterval[];
    counterTypeMaintenances?:       MaintenanceCounter[];
}

export interface ServiceCharge {
    serviceTypeId:                  number;
    begda:                          Date;
    endda:                          Date;
    charge:                         number;
    serviceType?:                   ServiceType;
}

export interface ServiceType {
    serviceTypeId:                  number;
    ownerId:                        number;
    businessServiceId:              string;
    caption:                        string;
    businessService?:               BusinessService;
    serviceCharges?:                ServiceCharge[];
    serviceTypeSteps?:              ServiceTypeStep[];
}

export interface ServiceTypeStep {
    serviceTypeId:                  number;
    materialTypeId:                 string;
    quantity:                       number;
    unit:                           string;
    duration:                       number;
    materialType?:                  MaterialType;
    serviceType?:                   ServiceType;
    serviceTypeCounterIntervals?:   MxCounterInterval[];
}

export interface LotInventory {
    organizationId:                 number;
    materialId:                     number;
    lotId:                          string;
    quantity:                       number;
    begda:                          Date;
    materialInventory?:             MaterialInventory;
}

export interface Manufacturer {
    manufacturerId:                 string;
    caption:                        string;
    requestedManufacture?:          RequestForProposalItem[];
    manufacturedMaterials?:         Material[];
}

export interface Material {
    materialId:                     number;
    ownerId:                        number;
    materialTypeId:                 string;
    manufacturerId?:                string;
    caption:                        string;
    defaultUnit:                    string;
    purchaseUnit?:                  string;
    issueType?:                     string;
    issueUnit?:                     string;
    shelfLife?:                     number;
    costMethod?:                    string;
    cost?:                          number;
    equipment?:                     string;
    partNumber?:                    string;
    status?:                        string;
    manufacturer?:                  Manufacturer;
    materialType?:                  MaterialType;
    materialAttributes?:            MaterialAttribute[];
    materialsPurchaseOrders?:       PurchaseOrderItem[];
    materialInventoryHistories?:    MaterialInventoryHistory[];
    materialByDefines?:             ProductByDefine[];
    bomOperations?:                 BomOperation[];
    equipments?:                    Equipment[];
    equipmentComponents?:           FinalEquipmentPart[];
    materialGroupAssignments?:      MaterialGroupAssignment[];
    materialSalePrices?:            MaterialSalePrice[];
    materialMovements?:             MaterialMovement[];
    materialsRequests?:             MaterialRequestItem[];
    materialsSalesCampaigns?:       SalesCampaignItem[];
    materialShipments?:             ShipmentLine[];
    materialPackUnits?:             MaterialPackUnit[];
    rfpItemProposalMaterial?:       ProposalToRfpItem[];
    materialInventories?:           MaterialInventory[];
    materialPriceCommitments?:      ProductPriceCommitment[];
    materialReservations?:          MaterialReservation[];
    rfpItemMaterial?:               RequestForProposalItem[];
    materialPurchaseDeliveries?:    PurchaseDeliveryLine[];
    materialSaleTaxes?:             MaterialSaleTax[];
    materialSalesOrders?:           SalesOrderItem[];
    bomOperationStepMaterials?:     BomOperationStep[];
    materialsProductionOrders?:     ProductionOrderItem[];
}

export interface MaterialAttribute {
    materialId:                     number;
    magId:                          string;
    value:                          string;
    materialAttributeGroup?:        MaterialAttributeGroup;
    material?:                      Material;
}

export interface MaterialAttributeGroup {
    magId:                          string;
    ownerId:                        number;
    caption:                        string;
    attributeGroupMaterialTypes?:   MaterialTypeAttribute[];
    materialAttributeOptions?:      MaterialAttributeOption[];
    attrGroupPurchaseOrders?:       PurchaseOrderItemAttr[];
    materialAttributeEquipments?:   EquipmentAttribute[];
    attributeGroupSalesOrders?:     SalesOrderItemAttr[];
    attributeGroupMaterials?:       MaterialAttribute[];
    attrGroupMaterialRequests?:     MaterialRequestItemAttr[];
}

export interface MaterialAttributeOption {
    magId:                          string;
    low:                            string;
    high?:                          string;
    caption:                        string;
    materialAttributeGroup?:        MaterialAttributeGroup;
}

export interface MaterialGroup {
    materialGroupId:                number;
    ownerId:                        number;
    caption:                        string;
    purpose:                        string;
    parentId?:                      number;
    materialGroup?:                 MaterialGroup;
    materialGroups?:                MaterialGroup[];
    groupMaterialAssignments?:      MaterialGroupAssignment[];
}

export interface MaterialGroupAssignment {
    materialGroupId:                number;
    materialId:                     number;
    begda:                          Date;
    material?:                      Material;
    materialGroup?:                 MaterialGroup;
}

export interface MaterialInventory {
    organizationId:                 number;
    materialId:                     number;
    quantity:                       number;
    unit:                           string;
    reserved?:                      number;
    reserveUnit?:                   string;
    cost?:                          number;
    material?:                      Material;
    organization?:                  Organization;
    lotInventories?:                LotInventory[];
}

export interface MaterialInventoryHistory {
    organizationId:                 number;
    materialId:                     number;
    periodEnd:                      Date;
    year?:                          number;
    quarter?:                       number;
    month?:                         number;
    week?:                          number;
    material?:                      Material;
    organization?:                  Organization;
}

export interface MaterialMovement {
    mmTxId:                         number;
    materialId:                     number;
    moveType:                       number;
    begda:                          Date;
    quantity:                       number;
    unit:                           string;
    username:                       string;
    orderType?:                     string;
    orderId?:                       number;
    reversed?:                      string;
    reversTxId?:                    number;
    fromType?:                      string;
    fromId?:                        number;
    toType?:                        string;
    toId?:                          number;
    material?:                      Material;
}

export interface MaterialPackUnit {
    materialId:                     number;
    pack:                           string;
    quantity:                       number;
    unit:                           string;
    material?:                      Material;
}

export interface MaterialReservation {
    reservationId:                  number;
    materialId:                     number;
    begda:                          Date;
    status:                         string;
    quantity:                       number;
    unit:                           string;
    orderType:                      string;
    orderId:                        number;
    material?:                      Material;
}

export interface MaterialSalePrice {
    materialId:                     number;
    begda:                          Date;
    endda:                          Date;
    price:                          number;
    material?:                      Material;
}

export interface MaterialSaleTax {
    materialId:                     number;
    begda:                          Date;
    taxId:                          string;
    endda:                          Date;
    rate:                           number;
    taxType?:                       TaxType;
    material?:                      Material;
}

export interface MaterialType {
    materialTypeId:                 string;
    caption:                        string;
    unit:                           string;
    master?:                        number;
    logo?:                          string;
    rfpItemMaterialType?:           RequestForProposalItem[];
    rfpItemProposalMatType?:        ProposalToRfpItem[];
    materialTypeServiceTypes?:      ServiceTypeStep[];
    materialTypeAttributes?:        MaterialTypeAttribute[];
    materialTypeByDefine?:          ProductTypeByDefine[];
    materialTypeMxSteps?:           MaintenanceStep[];
    materialTypeInEquipments?:      FinalEquipmentPart[];
    materials?:                     Material[];
}

export interface MaterialTypeAttribute {
    materialTypeId:                 string;
    magId:                          string;
    mandatory:                      string;
    defaultValue?:                  string;
    materialAttributeGroup?:        MaterialAttributeGroup;
    materialType?:                  MaterialType;
}

export interface CreditCard {
    cardNumber:                     string;
    cvc2:                           string;
    expireYear:                     number;
    expireMonth:                    number;
    nameOnCard:                     string;
    personId:                       number;
    person?:                        Person;
}

export interface Employee {
    personId:                       number;
    employment:                     Date;
    ownerId:                        number;
    position?:                      string;
    emailAddress?:                  string;
    workPhone?:                     string;
    cellPhone?:                     string;
    departure?:                     Date;
    departureType?:                 string;
    person?:                        Person;
    positionAssignments?:           PositionAssignment[];
}

export interface Organization {
    organizationId:                 number;
    ownerId:                        number;
    organizationType:               string;
    addressId:                      number;
    caption:                        string;
    parentId?:                      number;
    organization?:                  Organization;
    partnerAddress?:                PartnerAddress;
    organizationsEquipment?:        EquipmentLocation[];
    productionOrders?:              ProductionOrder[];
    productTypeByDefines?:          ProductTypeByDefine[];
    organizationInvntHistories?:    MaterialInventoryHistory[];
    shipments?:                     Shipment[];
    organizationsProductionJobs?:   ProductionJob[];
    childOrganizations?:            Organization[];
    organizationMaintenances?:      Maintenance[];
    purchaseOrders?:                PurchaseOrder[];
    productionResources?:           ProductionResource[];
    purchaseDeliveries?:            PurchaseDelivery[];
    organizationsInventories?:      MaterialInventory[];
    positions?:                     Position[];
    materialRequests?:              MaterialRequest[];
}

export interface Person {
    personId:                       number;
    firstName:                      string;
    middleName?:                    string;
    lastName:                       string;
    birthday:                       Date;
    gender:                         string;
    nationality:                    string;
    governmentId?:                  string;
    personalMail?:                  string;
    cellPhone?:                     string;
    personQualifications?:          PersonQualification[];
    personsEquipmentAssignments?:   EquipmentAssignment[];
    personsEmployments?:            Employee[];
    creditCards?:                   CreditCard[];
    personsUserAccounts?:           UserAccountOwner[];
}

export interface PersonQualification {
    personId:                       number;
    qualificationId:                number;
    begda:                          Date;
    endda?:                         Date;
    grade?:                         number;
    issuer?:                        string;
    department?:                    string;
    person?:                        Person;
    qualification?:                 Qualification;
}

export interface Position {
    ownerId:                        number;
    organizationId:                 number;
    position:                       string;
    begda:                          Date;
    endda:                          Date;
    positionType?:                  PositionType;
    organization?:                  Organization;
    requiredQualifications?:        PositionQualification[];
    assignedPersonnel?:             PositionAssignment[];
}

export interface PositionAssignment {
    ownerId:                        number;
    organizationId:                 number;
    position:                       string;
    personId:                       number;
    employment:                     Date;
    begda:                          Date;
    endda?:                         Date;
    reason:                         string;
    assignmentType:                 string;
    positionT?:                      Position;
    employee?:                      Employee;
}

export interface PositionQualification {
    ownerId:                        number;
    organizationId:                 number;
    position:                       string;
    qualificationId:                number;
    grade:                          number;
    priority:                       string;
    impactPercent:                  number;
    positionT?:                      Position;
    qualification?:                 Qualification;
}

export interface PositionType {
    ownerId:                        number;
    position:                       string;
    caption:                        string;
    typePositions?:                 Position[];
}

export interface Qualification {
    qualificationId:                number;
    qualificationType:              string;
    caption:                        string;
    gradeBase:                      number;
    validity?:                      number;
    qualifiedPositions?:            PositionQualification[];
    qualifiedPersonnel?:            PersonQualification[];
}

export interface UserAccountOwner {
    username:                       string;
    personId:                       number;
    begda:                          Date;
    userAccount?:                   UserAccount;
    person?:                        Person;
}

export interface BomOperation {
    bomOperationId:                 number;
    materialId:                     number;
    caption:                        string;
    facilityType:                   string;
    setupTime:                      number;
    unitTime:                       number;
    makeupTime:                     number;
    productionUnit:                 string;
    material?:                      Material;
    bomOperationSteps?:             BomOperationStep[];
    bomOperationProductionJobs?:    ProductionJob[];
}

export interface BomOperationStep {
    bomOperationId:                 number;
    step:                           number;
    materialId:                     number;
    leadTime?:                      number;
    quantity?:                      number;
    unit?:                          string;
    bomOperation?:                  BomOperation;
    material?:                      Material;
    bomOperationStepResources?:     BomOperationStepResource[];
}

export interface BomOperationStepResource {
    bomOperationId:                 number;
    step:                           number;
    resourceType:                   string;
    unitDuration?:                  number;
    bomOperationStep?:              BomOperationStep;
}

export interface ProductionJob {
    productionJobId:                number;
    organizationId:                 number;
    productionOrderId:              number;
    line:                           number;
    bomOperationId:                 number;
    productionOrderItem?:           ProductionOrderItem;
    bomOperation?:                  BomOperation;
    organization?:                  Organization;
    productionJobResources?:        ProductionJobResource[];
}

export interface ProductionJobResource {
    productionJobId:                number;
    organizationId:                 number;
    resourceType:                   string;
    quantity?:                      number;
    begda?:                         Date;
    duration?:                      number;
    productionResource?:            ProductionResource;
    productionJob?:                 ProductionJob;
}

export interface ProductionLineReason {
    productionOrderId:              number;
    line:                           number;
    orderType:                      string;
    orderId:                        number;
    orderLine:                      number;
    priority:                       number;
    productionOrderItem?:           ProductionOrderItem;
}

export interface ProductionOrder {
    productionOrderId:              number;
    ownerId:                        number;
    organizationId:                 number;
    orderDate?:                     Date;
    dueDate?:                       Date;
    status?:                        string;
    username?:                      string;
    description?:                   string;
    organization?:                  Organization;
    productionOrderItems?:          ProductionOrderItem[];
}

export interface ProductionOrderItem {
    productionOrderId:              number;
    line:                           number;
    materialId:                     number;
    quantity:                       number;
    unit:                           string;
    status:                         string;
    productionOrder?:               ProductionOrder;
    material?:                      Material;
    productionLineReasons?:         ProductionLineReason[];
    productionOrderItemJobs?:       ProductionJob[];
}

export interface ProductionResource {
    organizationId:                 number;
    resourceType:                   string;
    quantity:                       number;
    unit:                           string;
    organization?:                  Organization;
    productionResourceJobs?:        ProductionJobResource[];
}

export interface Category {
    categoryId:                     number;
    parentId?:                      number;
    caption:                        string;
    catIndex:                       string;
    details?:                       string;
    unit?:                          string;
    catLevel:                       number;
    treeCode:                       string;
    accountSchemaId?:               number;
    projectId?:                     number;
    mainFlag:                       string;
    unit2?:                         string;
    category?:                      Category;
    categoryInWbses?:               ProjectWbs[];
    categories?:                    Category[];
    categoryTexts?:                 CategoryText[];
}

export interface CategoryText {
    categoryId:                     number;
    langcode:                       string;
    caption:                        string;
    category?:                      Category;
}

export interface Project {
    projectId:                      number;
    ownerId:                        number;
    caption:                        string;
    status:                         string;
    country:                        string;
    location?:                      string;
    customer?:                      string;
    contractDate?:                  Date;
    areaHandover?:                  Date;
    duration?:                      number;
    revizedDuration?:               number;
    durationType?:                  string;
    revizedCompletion?:             Date;
    expectedCompletion?:            Date;
    endOfWarranty?:                 Date;
    contractedAmount?:              number;
    contractExchange?:              string;
    expectedCost?:                  number;
    advancePercent?:                number;
    letterOfAdvance?:               number;
    letterOfWarranty?:              number;
    organizationId?:                number;
    projectTeams?:                  ProjectTeam[];
    projectApprovalHistories?:      ProjectApprovalHistory[];
    projectWbses?:                  ProjectWbs[];
}

export interface ProjectApprovalHistory {
    projectId:                      number;
    username:                       string;
    approval:                       Date;
    status:                         string;
    userAccount?:                   UserAccount;
    project?:                       Project;
}

export interface ProjectTeam {
    projectId:                      number;
    teamId:                         number;
    caption:                        string;
    project?:                       Project;
    projectTeamTemplates?:          ProjectTeamTemplate[];
    projectTeamWbsQuantities?:      ProjectWbsQuantity[];
    projectTeamPersonnel?:          ProjectTeamPerson[];
}

export interface ProjectTeamPerson {
    projectId:                      number;
    teamId:                         number;
    workerId:                       number;
    teamLead:                       string;
    worker?:                        Worker;
    projectTeam?:                   ProjectTeam;
    projectTeamPersonnelManhour?:   ProjectWbsManhour[];
}

export interface ProjectTeamTemplate {
    projectId:                      number;
    teamId:                         number;
    categoryId:                     number;
    projectTeam?:                   ProjectTeam;
    projectWbs?:                    ProjectWbs;
}

export interface ProjectWbs {
    projectId:                      number;
    categoryId:                     number;
    accountSchemaId?:               number;
    unit:                           string;
    metric:                         number;
    quantity:                       number;
    pupMetric?:                     number;
    pupQuantity?:                   number;
    plannedMetric?:                 number;
    plannedQuantity?:               number;
    customerWbsCode?:               string;
    customerWbsCaption?:            string;
    category?:                      Category;
    project?:                       Project;
    projectWbsManhours?:            ProjectWbsManhour[];
    projectWbsTeamTemplates?:       ProjectTeamTemplate[];
    projectWbsQuantities?:          ProjectWbsQuantity[];
}

export interface ProjectWbsManhour {
    projectId:                      number;
    categoryId:                     number;
    teamId:                         number;
    workerId:                       number;
    activityDate:                   Date;
    manhour:                        number;
    overtime?:                      number;
    localMh?:                       number;
    foreignMh?:                     number;
    trMh?:                          number;
    status:                         string;
    projectWbs?:                    ProjectWbs;
    projectTeamPerson?:             ProjectTeamPerson;
}

export interface ProjectWbsQuantity {
    projectId:                      number;
    categoryId:                     number;
    teamId:                         number;
    begda:                          Date;
    endda:                          Date;
    quantity:                       number;
    status:                         string;
    projectTeam?:                   ProjectTeam;
    projectWbs?:                    ProjectWbs;
}

export interface Subcontractor {
    businessPartnerId:              number;
    begda:                          Date;
    extSubcontractor?:              string;
    businessPartner?:               BusinessPartner;
    subcontractorWorkers?:          Worker[];
}

export interface Worker {
    workerId:                       number;
    caption:                        string;
    businessPartnerId?:             number;
    personId?:                      number;
    citizenship?:                   string;
    subcontractor?:                 Subcontractor;
    workersProjectTeams?:           ProjectTeamPerson[];
}

export interface ProposalToRfp {
    proposalId:                     number;
    ownerId:                        number;
    description:                    string;
    validUntil:                     Date;
    shipmentBy:                     string;
    extraDiscount:                  number;
    totalPrice:                     string;
    currency:                       string;
    username:                       string;
    rfpId:                          number;
    purchaseOrderId?:               number;
    paymentType:                    string;
    paymentNote?:                   string;
    deliveryNote?:                  string;
    proposalToRfpItems?:            ProposalToRfpItem[];
    proposalToRfpDialogs?:          ProposalToRfpDialog[];
}

export interface ProposalToRfpDialog {
    proposalId:                     number;
    dtime:                          Date;
    dtext:                          string;
    username:                       string;
    proposalToRfp?:                 ProposalToRfp;
}

export interface ProposalToRfpItem {
    proposalId:                     number;
    rfpId:                          number;
    line:                           number;
    materialTypeId:                 string;
    materialId:                     number;
    ownerId:                        number;
    quantity:                       number;
    unit:                           string;
    unitPrice:                      number;
    discountPct:                    number;
    taxPct:                         number;
    currency:                       string;
    requestForProposalItem?:        RequestForProposalItem;
    proposalToRfp?:                 ProposalToRfp;
    material?:                      Material;
    materialType?:                  MaterialType;
}

export interface PurchaseDelivery {
    deliveryId:                     number;
    ownerId:                        number;
    organizationId:                 number;
    deliveryDate:                   Date;
    invoiceId?:                     string;
    username:                       string;
    organization?:                  Organization;
    purchaseDeliveryLines?:         PurchaseDeliveryLine[];
}

export interface PurchaseDeliveryAddress {
    purchaseOrderId:                number;
    businessPartnerId:              number;
    addressId:                      number;
    partnerAddress?:                PartnerAddress;
    purchaseOrder?:                 PurchaseOrder;
}

export interface PurchaseDeliveryLine {
    deliveryId:                     number;
    purchaseOrderId:                number;
    line:                           number;
    materialId:                     number;
    quantity:                       number;
    unit?:                          string;
    purchaseDelivery?:              PurchaseDelivery;
    purchaseOrderItem?:             PurchaseOrderItem;
    material?:                      Material;
}

export interface PurchaseOrder {
    purchaseOrderId:                number;
    ownerId:                        number;
    vendorId:                       number;
    organizationId:                 number;
    orderDate:                      Date;
    dueDate?:                       Date;
    status:                         string;
    username:                       string;
    description?:                   string;
    discount?:                      number;
    advancePayment?:                number;
    onlineOrder?:                   string;
    organization?:                  Organization;
    purchaseOrderItems?:            PurchaseOrderItem[];
    purchaseDeliveryAddresses?:     PurchaseDeliveryAddress[];
}

export interface PurchaseOrderItem {
    purchaseOrderId:                number;
    line:                           number;
    materialId:                     number;
    quantity:                       number;
    unit:                           string;
    unitPrice?:                     number;
    discount?:                      number;
    currency?:                      string;
    status?:                        string;
    material?:                      Material;
    purchaseOrder?:                 PurchaseOrder;
    purchaseOrderItemDeliveries?:   PurchaseDeliveryLine[];
    purchaseOrderItemAttrs?:        PurchaseOrderItemAttr[];
    purchaseOrderTaxes?:            PurchaseOrderTax[];
    purchaseReasons?:               PurchaseReason[];
}

export interface PurchaseOrderItemAttr {
    purchaseOrderId:                number;
    line:                           number;
    magId:                          string;
    value?:                         string;
    purchaseOrderItem?:             PurchaseOrderItem;
    materialAttributeGroup?:        MaterialAttributeGroup;
}

export interface PurchaseOrderTax {
    purchaseOrderId:                number;
    line:                           number;
    taxId:                          string;
    amount:                         number;
    purchaseOrderItem?:             PurchaseOrderItem;
}

export interface PurchaseReason {
    purchaseOrderId:                number;
    line:                           number;
    reasonType:                     string;
    reasonId:                       number;
    reasonLine:                     number;
    begda?:                         Date;
    purchaseOrderItem?:             PurchaseOrderItem;
}

export interface RequestForProposal {
    rfpId:                          number;
    ownerId:                        number;
    purchaseArea:                   number;
    username:                       string;
    caption:                        string;
    requestDate:                    Date;
    endOfProposal:                  Date;
    deliveryDate:                   Date;
    consortiumAllowed:              string;
    partialAllowed:                 string;
    deliveryAddress:                number;
    status:                         string;
    partnerAddress?:                PartnerAddress;
    requestForProposalItems?:       RequestForProposalItem[];
    rfpPublishments?:               RfpPublishment[];
}

export interface RequestForProposalItem {
    rfpId:                          number;
    line:                           number;
    materialTypeId?:                string;
    manufacturerId?:                string;
    materialId?:                    number;
    specification:                  string;
    quantity:                       number;
    unit:                           string;
    requestForProposal?:            RequestForProposal;
    materialType?:                  MaterialType;
    material?:                      Material;
    manufacturer?:                  Manufacturer;
    rfpItemProposals?:              ProposalToRfpItem[];
}

export interface RfpPublishment {
    rfpId:                          number;
    vendorId:                       number;
    begda:                          Date;
    requestForProposal?:            RequestForProposal;
}

export interface MaterialRequest {
    materialRequestId:              number;
    ownerId:                        number;
    organizationId:                 number;
    username:                       string;
    purpose:                        string;
    requestDate:                    Date;
    dueDate:                        Date;
    status:                         string;
    description?:                   string;
    organization?:                  Organization;
    materialRequestItems?:          MaterialRequestItem[];
}

export interface MaterialRequestItem {
    materialRequestId:              number;
    line:                           number;
    materialId:                     number;
    quantity:                       number;
    unit:                           string;
    description?:                   string;
    material?:                      Material;
    materialRequest?:               MaterialRequest;
    materialRequestItemAttrs?:      MaterialRequestItemAttr[];
}

export interface MaterialRequestItemAttr {
    materialRequestId:              number;
    line:                           number;
    magId:                          string;
    value:                          string;
    materialRequestItem?:           MaterialRequestItem;
    materialAttributeGroup?:        MaterialAttributeGroup;
}

export interface ProductByDefine {
    materialTypeId:                 string;
    organizationId:                 number;
    materialId:                     number;
    contentRequired:                string;
    material?:                      Material;
    productTypeByDefine?:           ProductTypeByDefine;
}

export interface ProductTypeByDefine {
    materialTypeId:                 string;
    organizationId:                 number;
    leadTime:                       number;
    timeType:                       string;
    organization?:                  Organization;
    materialType?:                  MaterialType;
    productByDefines?:              ProductByDefine[];
}

export interface ProductPriceCommitment {
    materialId:                     number;
    businessPartnerId:              number;
    orderDeadLine:                  Date;
    ownerId:                        number;
    deliveryPromise:                Date;
    minQuantity:                    number;
    maxQuantity:                    number;
    boxQuantity:                    number;
    unit:                           string;
    startPrice:                     number;
    goalPrice:                      number;
    currency:                       string;
    pricing:                        string;
    currentOrder:                   number;
    currentPrice:                   number;
    earlyBirdPct:                   number;
    status:                         string;
    vendor?:                        Vendor;
    material?:                      Material;
    productPriceCommitmentItems?:   ProductPriceCommitmentItem[];
    commitmentSalesOrders?:         SalesOrderCommitment[];
}

export interface ProductPriceCommitmentItem {
    materialId:                     number;
    businessPartnerId:              number;
    orderDeadLine:                  Date;
    quantity:                       number;
    price:                          number;
    productPriceCommitment?:        ProductPriceCommitment;
}

export interface SalesAccountBalance {
    ownerId:                        number;
    refund:                         number;
    totalSale:                      number;
    totalPurchase:                  number;
    provision:                      number;
    businessPartner?:               BusinessPartner;
}

export interface SalesCampaign {
    salesCampaignId:                number;
    ownerId:                        number;
    caption:                        string;
    begda:                          Date;
    endda:                          Date;
    discountType:                   string;
    quantityThreshold?:             number;
    discountPercent?:               number;
    discountQuantity?:              number;
    saleThreshold?:                 number;
    discountAmount?:                number;
    salesCampaignItems?:            SalesCampaignItem[];
}

export interface SalesCampaignItem {
    salesCampaignId:                number;
    materialId:                     number;
    price:                          number;
    salesCampaign?:                 SalesCampaign;
    material?:                      Material;
}

export interface SalesDeliveryAddress {
    salesOrderId:                   number;
    address:                        string;
    city:                           string;
    state?:                         string;
    country?:                       string;
    longitude?:                     number;
    latitude?:                      number;
    altitude?:                      number;
    salesOrder?:                    SalesOrder;
}

export interface SalesOrder {
    salesOrderId:                   number;
    ownerId:                        number;
    customerId:                     number;
    orderDate:                      Date;
    dueDate?:                       Date;
    status:                         string;
    username?:                      string;
    description?:                   string;
    discount?:                      number;
    advancePayment?:                number;
    onlineOrder?:                   string;
    customer?:                      Customer;
    salesDeliveryAddresses?:        SalesDeliveryAddress[];
    salesOrderItems?:               SalesOrderItem[];
}

export interface SalesOrderCommitment {
    materialId:                     number;
    businessPartnerId:              number;
    orderDeadLine:                  Date;
    salesOrderId:                   number;
    line:                           number;
    initialSequence:                number;
    initialPrice:                   number;
    orderRefund:                    number;
    refundDecision:                 string;
    refundStatus:                   string;
    salesOrderItem?:                SalesOrderItem;
    productPriceCommitment?:        ProductPriceCommitment;
}

export interface SalesOrderItem {
    salesOrderId:                   number;
    line:                           number;
    materialId:                     number;
    quantity:                       number;
    unit:                           string;
    unitPrice?:                     number;
    discount?:                      number;
    currency?:                      string;
    status?:                        string;
    material?:                      Material;
    salesOrder?:                    SalesOrder;
    salesOrderCommitments?:         SalesOrderCommitment[];
    salesOrderTaxes?:               SalesOrderTax[];
    salesOrderItemAttrs?:           SalesOrderItemAttr[];
}

export interface SalesOrderItemAttr {
    salesOrderId:                   number;
    line:                           number;
    magId:                          string;
    value:                          string;
    materialAttributeGroup?:        MaterialAttributeGroup;
    salesOrderItem?:                SalesOrderItem;
}

export interface SalesOrderTax {
    salesOrderId:                   number;
    line:                           number;
    taxId:                          string;
    amount:                         number;
    salesOrderItem?:                SalesOrderItem;
}

export interface ApplicationConfig {
    ownerId:                        number;
    domain:                         string;
    homepage:                       string;
    applicationTitle:               string;
    initialContent?:                string;
    initialSkin?:                   string;
    businessPartner?:               BusinessPartner;
}

export interface AuthorityGroup {
    authorityGroup:                 string;
    caption:                        string;
    authorityGroupAuthorizations?:  UserAuthorization[];
    objectAuthorizations?:          ObjectAuthorization[];
}

export interface AuthorityObject {
    objectType:                     string;
    authorityObjectActions?:        AuthorityObjectAction[];
}

export interface AuthorityObjectAction {
    objectType:                     string;
    action:                         string;
    authorityObject?:               AuthorityObject;
    objectAuthorizedGroups?:        ObjectAuthorization[];
}

export interface CaptionTranslation {
    caption:                        string;
    langcode:                       string;
    labelupper:                     string;
    labellower:                     string;
    language?:                      Language;
}

export interface City {
    countryCode:                    string;
    cityCode:                       string;
    caption:                        string;
    country?:                       Country;
}

export interface ContentData {
    contentId:                      number;
    ownerId:                        number;
    originalFile:                   string;
    originIp:                       string;
    mimetype:                       string;
    username:                       string;
    createTime:                     Date;
    bindata?:                       unknown;
    thumb?:                         unknown;
    contentRelations?:              ContentRelation[];
}

export interface ContentRelation {
    objectType:                     string;
    objectId:                       number;
    contentId:                      number;
    ownerId:                        number;
    caption:                        string;
    purpose:                        string;
    priority:                       number;
    username:                       string;
    createTime:                     Date;
    contentData?:                   ContentData;
}

export interface Country {
    code:                           string;
    caption:                        string;
    cities?:                        City[];
}

export interface DomainName {
    domain:                         string;
    keysize:                        number;
    caption:                        string;
    sortBy:                         string;
    domainValues?:                  DomainValue[];
}

export interface DomainValue {
    domain:                         string;
    refvalue:                       string;
    caption:                        string;
    domainName?:                    DomainName;
}

export interface GeoCity {
    country:                        string;
    city:                           string;
    caption:                        string;
    longitude?:                     number;
    latitude?:                      number;
    altitude?:                      number;
    polygon?:                       string;
}

export interface Language {
    langcode:                       string;
    caption:                        string;
    localeStr:                      string;
    direction:                      string;
    flag:                           string;
    captionTranslations?:           CaptionTranslation[];
}

export interface MainMenu {
    menu:                           string;
    caption:                        string;
    icon:                           string;
    displayOrder:                   number;
    screenPages?:                   ScreenPage[];
}

export interface MasterDetailRelation {
    constraintName:                 string;
    masterTable:                    string;
    detailTable:                    string;
    detailAttribute:                string;
    mdView:                         string;
    paging?:                        string;
    filter?:                        string;
    orderby?:                       string;
    masterTableController?:         TableControllerStatic;
    detailTableController?:         TableControllerStatic;
}

export interface NotificationRecipient {
    notificationTypeId:             number;
    username:                       string;
    event:                          string;
    enable:                         string;
    notificationType?:              NotificationType;
    userAccount?:                   UserAccount;
}

export interface NotificationType {
    notificationTypeId:             number;
    ownerId:                        number;
    tablename:                      string;
    statusField:                    string;
    stopValue:                      string;
    notificationRecipients?:        NotificationRecipient[];
    notifiedUsers?:                 UserNotification[];
}

export interface ObjectAuthorization {
    authorityGroup:                 string;
    objectType:                     string;
    action:                         string;
    keyValue:                       string;
    authorityGroupT?:                AuthorityGroup;
    authorityObjectAction?:         AuthorityObjectAction;
}

export interface ScreenPage {
    pagename:                       string;
    caption:                        string;
    icon:                           string;
    url:                            string;
    menu:                           string;
    displayOrder:                   number;
    mainMenu?:                      MainMenu;
    pageBusinessServices?:          BusinessServicePage[];
}

export interface TableAction {
    tablename:                      string;
    action:                         string;
    caption:                        string;
    method:                         string;
    enable:                         string;
    authorityCheck:                 string;
    recordSpecific:                 string;
    tableControllerStatic?:         TableControllerStatic;
}

export interface TableContentType {
    tablename:                      string;
    objectType:                     string;
    caption:                        string;
    mimetype?:                      string;
    tableControllerStatic?:         TableControllerStatic;
}

export interface TableControllerStatic {
    tablename:                      string;
    rootmapping:                    string;
    module:                         string;
    customerSpecific:               string;
    organizationCheck:              string;
    cacheInHash:                    string;
    searchView?:                    string;
    listView?:                      string;
    editView?:                      string;
    showView?:                      string;
    selectView?:                    string;
    orderby?:                       string;
    sequenceName?:                  string;
    childRelation?:                 MasterDetailRelation[];
    tableActions?:                  TableAction[];
    tableFieldFaces?:               TableFieldFace[];
    tableContentTypes?:             TableContentType[];
    masterRelation?:                MasterDetailRelation[];
}

export interface TableFieldFace {
    tablename:                      string;
    fieldname:                      string;
    editStyle:                      string;
    editJstlPath:                   string;
    viewJstlPath:                   string;
    searchStyle:                    string;
    lookupStyle:                    string;
    translated:                     string;
    minvalue?:                      string;
    maxvalue?:                      string;
    tableControllerStatic?:         TableControllerStatic;
}

export interface TableViewScenario {
    scenarioId:                     number;
    caption:                        string;
    tablename:                      string;
    tableViewScenarioItems?:        TableViewScenarioItem[];
}

export interface TableViewScenarioItem {
    scenarioId:                     number;
    seq:                            number;
    fkname:                         string;
    tablename:                      string;
    caption?:                       string;
    accessType:                     string;
    parentSeq:                      number;
    tableViewScenario?:             TableViewScenario;
}

export interface TreeData {
    nodeId:                         number;
    ownerId:                        number;
    caption:                        string;
    purpose:                        string;
    parentId?:                      number;
    treeData?:                      TreeData;
    nodeChildren?:                  TreeData[];
}

export interface UnitConversion {
    source:                         string;
    target:                         string;
    multiplier?:                    number;
}

export interface UserAccount {
    username:                       string;
    status:                         string;
    firstName:                      string;
    lastName:                       string;
    emailAddress?:                  string;
    passtext?:                      string;
    passdate?:                      Date;
    lastlogon?:                     Date;
    userNotifications?:             UserNotification[];
    receivingNotifications?:        NotificationRecipient[];
    userTicketEvents?:              TicketEvent[];
    supportUserTickets?:            SupportTicket[];
    userAccountTickets?:            SupportTicket[];
    projectApprovalUserHistory?:    ProjectApprovalHistory[];
    userAccountAuthorizations?:     UserAuthorization[];
    agentGroups?:                   SupportAgent[];
    userFavorites?:                 UserFavorite[];
    userAccountsOwners?:            UserAccountOwner[];
}

export interface UserAuthorization {
    username:                       string;
    authorityGroup:                 string;
    begda:                          Date;
    endda?:                         Date;
    authorityGroupT?:                AuthorityGroup;
    userAccount?:                   UserAccount;
}

export interface UserFavorite {
    username:                       string;
    favoriteType:                   string;
    objectId:                       string;
    description?:                   string;
    userAccount?:                   UserAccount;
}

export interface UserNotification {
    notificationId:                 number;
    notificationTypeId:             number;
    username:                       string;
    objectId:                       string;
    status:                         string;
    raiseDate:                      Date;
    dueDate:                        Date;
    description?:                   string;
    userAccount?:                   UserAccount;
    notificationType?:              NotificationType;
}

export interface Shipment {
    shipmentId:                     number;
    ownerId:                        number;
    shipmentType:                   string;
    shipDate:                       Date;
    status:                         string;
    organizationId:                 number;
    username:                       string;
    cost?:                          number;
    invoiceId?:                     string;
    fromAddress?:                   string;
    fromCity?:                      string;
    fromState?:                     string;
    fromCountry?:                   string;
    toAddress:                      string;
    toCity:                         string;
    toState?:                       string;
    toCountry?:                     string;
    organization?:                  Organization;
    shipmentLines?:                 ShipmentLine[];
}

export interface ShipmentLine {
    shipmentId:                     number;
    shipmentLine:                   number;
    materialId:                     number;
    quantity:                       number;
    unit:                           string;
    refOrderType?:                  string;
    refOrderId?:                    number;
    shipment?:                      Shipment;
    material?:                      Material;
}

