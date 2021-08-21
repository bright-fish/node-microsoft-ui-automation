export interface CurrentBoundingRectangle {
  bottom: number;
  left: number;
  right: number;
  top: number;
}

export interface IUIAutomationElement {
  cachedProviderDescription: any;
  cachedProcessId: any;
  cachedOrientation: any;
  cachedNativeWindowHandle: any;
  cachedLocalizedControlType: any;
  cachedLabeledBy: any;
  cachedItemType: any;
  cachedItemStatus: any;
  cachedIsRequiredForForm: any;
  cachedIsPassword: any;
  cachedIsOffscreen: any;
  cachedIsKeyboardFocusable: any;
  cachedIsEnabled: any;
  cachedIsDataValidForForm: any;
  cachedIsControlElement: any;
  cachedIsContentElement: any;
  cachedHelpText: any;
  cachedHasKeyboardFocus: any;
  cachedFrameworkId: any;
  cachedFlowsTo: any;
  cachedDescribedBy: any;
  cachedCulture: any;
  cachedControlType: any;
  cachedControllerFor: any;
  cachedClassName: any;
  cachedBoundingRectangle: any;
  cachedAutomationId: any;
  cachedAriaRole: any;
  cachedAriaProperties: any;
  cachedAccessKey: any;
  cachedAcceleratorKey: any;
  cachedName: any;
  currentLabeledBy: any;
  currentProviderDescription: string;
  currentProcessId: number;
  currentOrientation: number;
  currentNativeWindowHandle: unknown[];
  currentLocalizedControlType: string;
  currentItemType: string;
  currentItemStatus: string;
  currentIsRequiredForForm: boolean;
  currentIsPassword: boolean;
  currentIsOffscreen: boolean;
  currentIsKeyboardFocusable: boolean;
  currentIsEnabled: boolean;
  currentIsDataValidForForm: boolean;
  currentIsControlElement: boolean;
  currentIsContentElement: boolean;
  currentHelpText: string;
  currentHasKeyboardFocus: boolean;
  currentFrameworkId: string;
  currentFlowsTo: unknown[];
  currentDescribedBy: unknown[];
  currentCulture: number;
  currentControlType: number;
  currentControllerFor: unknown[];
  currentClassName: string;
  currentBoundingRectangle: CurrentBoundingRectangle;
  currentAutomationId: string;
  currentAriaRole: string;
  currentAriaProperties: string;
  currentAccessKey: string;
  currentAcceleratorKey: string;
  currentName: string;

  findFirst(
    treeScope: any,
    propertyCondition: PropertyCondition
  ): IUIAutomationElement;
}

export declare interface PropertyCondition {}

export declare interface IUIAutomationTreeWalker {
  getFirstChildElement(element: IUIAutomationElement): IUIAutomationElement;
  getFirstChildElementBuildCache(
    element: IUIAutomationElement
  ): IUIAutomationElement;
  getLastChildElement(element: IUIAutomationElement): IUIAutomationElement;
  getLastChildElementBuildCache(
    element: IUIAutomationElement
  ): IUIAutomationElement;
  getNextSiblingElement(element: IUIAutomationElement): IUIAutomationElement;
  getNextSiblingElementBuildCache(
    element: IUIAutomationElement
  ): IUIAutomationElement;
  getParentElement(element: IUIAutomationElement): IUIAutomationElement;
  getParentElementBuildCache(
    element: IUIAutomationElement
  ): IUIAutomationElement;
  getPreviousSiblingElement(
    element: IUIAutomationElement
  ): IUIAutomationElement;
  getPreviousSiblingElementBuildCache(
    element: IUIAutomationElement
  ): IUIAutomationElement;
  normalizeElement(element: IUIAutomationElement): IUIAutomationElement;
  normalizeElementBuildCache(
    element: IUIAutomationElement
  ): IUIAutomationElement;
}

export declare class IUIAutomation {
  getRootElement(): IUIAutomationElement;
  createPropertyCondition<Value>(
    propertyId: number,
    value: Value
  ): PropertyCondition;
  rawViewWalker: IUIAutomationTreeWalker;
  controlViewWalker: IUIAutomationTreeWalker;
  contentViewWalker: IUIAutomationTreeWalker;
}

export const enum TreeScope {
  TreeScope_None = 0,
  TreeScope_Element = 1,
  TreeScope_Children = 2,
  TreeScope_Descendants = 4,
  TreeScope_Parent = 8,
  TreeScope_Ancestors = 16,
  TreeScope_Subtree = 7,
}

export const enum PropertyIDs {
  UIA_NamePropertyId = 30005,
  UIA_NativeWindowHandlePropertyId = 30020,
  UIA_NavigationLandmarkTypeId = 80003,
  UIA_RuntimeIdPropertyId = 30000,
  UIA_BoundingRectanglePropertyId = 30001,
  UIA_ProcessIdPropertyId = 30002,
  UIA_ControlTypePropertyId = 30003,
  UIA_LocalizedControlTypePropertyId = 30004,
  UIA_AcceleratorKeyPropertyId = 30006,
  UIA_AccessKeyPropertyId = 30007,
  UIA_HasKeyboardFocusPropertyId = 30008,
  UIA_IsKeyboardFocusablePropertyId = 30009,
  UIA_IsEnabledPropertyId = 30010,
  UIA_AutomationIdPropertyId = 30011,
  UIA_ClassNamePropertyId = 30012,
  UIA_HelpTextPropertyId = 30013,
  UIA_ClickablePointPropertyId = 30014,
  UIA_CulturePropertyId = 30015,
  UIA_IsControlElementPropertyId = 30016,
  UIA_IsContentElementPropertyId = 30017,
  UIA_LabeledByPropertyId = 30018,
  UIA_IsPasswordPropertyId = 30019,
  UIA_ItemTypePropertyId = 30021,
  UIA_IsOffscreenPropertyId = 30022,
  UIA_OrientationPropertyId = 30023,
  UIA_FrameworkIdPropertyId = 30024,
  UIA_IsRequiredForFormPropertyId = 30025,
  UIA_ItemStatusPropertyId = 30026,
  UIA_IsDockPatternAvailablePropertyId = 30027,
  UIA_IsExpandCollapsePatternAvailablePropertyId = 30028,
  UIA_IsGridItemPatternAvailablePropertyId = 30029,
  UIA_IsGridPatternAvailablePropertyId = 30030,
  UIA_IsInvokePatternAvailablePropertyId = 30031,
  UIA_IsMultipleViewPatternAvailablePropertyId = 30032,
  UIA_IsRangeValuePatternAvailablePropertyId = 30033,
  UIA_IsScrollPatternAvailablePropertyId = 30034,
  UIA_IsScrollItemPatternAvailablePropertyId = 30035,
  UIA_IsSelectionItemPatternAvailablePropertyId = 30036,
  UIA_IsSelectionPatternAvailablePropertyId = 30037,
  UIA_IsTablePatternAvailablePropertyId = 30038,
  UIA_IsTableItemPatternAvailablePropertyId = 30039,
  UIA_IsTextPatternAvailablePropertyId = 30040,
  UIA_IsTogglePatternAvailablePropertyId = 30041,
  UIA_IsTransformPatternAvailablePropertyId = 30042,
  UIA_IsValuePatternAvailablePropertyId = 30043,
  UIA_IsWindowPatternAvailablePropertyId = 30044,
  UIA_ValueValuePropertyId = 30045,
  UIA_ValueIsReadOnlyPropertyId = 30046,
  UIA_RangeValueValuePropertyId = 30047,
  UIA_RangeValueIsReadOnlyPropertyId = 30048,
  UIA_RangeValueMinimumPropertyId = 30049,
  UIA_RangeValueMaximumPropertyId = 30050,
  UIA_RangeValueLargeChangePropertyId = 30051,
  UIA_RangeValueSmallChangePropertyId = 30052,
  UIA_ScrollHorizontalScrollPercentPropertyId = 30053,
  UIA_ScrollHorizontalViewSizePropertyId = 30054,
  UIA_ScrollVerticalScrollPercentPropertyId = 30055,
  UIA_ScrollVerticalViewSizePropertyId = 30056,
  UIA_ScrollHorizontallyScrollablePropertyId = 30057,
  UIA_ScrollVerticallyScrollablePropertyId = 30058,
  UIA_SelectionSelectionPropertyId = 30059,
  UIA_SelectionCanSelectMultiplePropertyId = 30060,
  UIA_SelectionIsSelectionRequiredPropertyId = 30061,
  UIA_GridRowCountPropertyId = 30062,
  UIA_GridColumnCountPropertyId = 30063,
  UIA_GridItemRowPropertyId = 30064,
  UIA_GridItemColumnPropertyId = 30065,
  UIA_GridItemRowSpanPropertyId = 30066,
  UIA_GridItemColumnSpanPropertyId = 30067,
  UIA_GridItemContainingGridPropertyId = 30068,
  UIA_DockDockPositionPropertyId = 30069,
  UIA_ExpandCollapseExpandCollapseStatePropertyId = 30070,
  UIA_MultipleViewCurrentViewPropertyId = 30071,
  UIA_MultipleViewSupportedViewsPropertyId = 30072,
  UIA_WindowCanMaximizePropertyId = 30073,
  UIA_WindowCanMinimizePropertyId = 30074,
  UIA_WindowWindowVisualStatePropertyId = 30075,
  UIA_WindowWindowInteractionStatePropertyId = 30076,
  UIA_WindowIsModalPropertyId = 30077,
  UIA_WindowIsTopmostPropertyId = 30078,
  UIA_SelectionItemIsSelectedPropertyId = 30079,
  UIA_SelectionItemSelectionContainerPropertyId = 30080,
  UIA_TableRowHeadersPropertyId = 30081,
  UIA_TableColumnHeadersPropertyId = 30082,
  UIA_TableRowOrColumnMajorPropertyId = 30083,
  UIA_TableItemRowHeaderItemsPropertyId = 30084,
  UIA_TableItemColumnHeaderItemsPropertyId = 30085,
  UIA_ToggleToggleStatePropertyId = 30086,
  UIA_TransformCanMovePropertyId = 30087,
  UIA_TransformCanResizePropertyId = 30088,
  UIA_TransformCanRotatePropertyId = 30089,
  UIA_IsLegacyIAccessiblePatternAvailablePropertyId = 30090,
  UIA_LegacyIAccessibleChildIdPropertyId = 30091,
  UIA_LegacyIAccessibleNamePropertyId = 30092,
  UIA_LegacyIAccessibleValuePropertyId = 30093,
  UIA_LegacyIAccessibleDescriptionPropertyId = 30094,
  UIA_LegacyIAccessibleRolePropertyId = 30095,
  UIA_LegacyIAccessibleStatePropertyId = 30096,
  UIA_LegacyIAccessibleHelpPropertyId = 30097,
  UIA_LegacyIAccessibleKeyboardShortcutPropertyId = 30098,
  UIA_LegacyIAccessibleSelectionPropertyId = 30099,
  UIA_LegacyIAccessibleDefaultActionPropertyId = 30100,
  UIA_AriaRolePropertyId = 30101,
  UIA_AriaPropertiesPropertyId = 30102,
  UIA_IsDataValidForFormPropertyId = 30103,
  UIA_ControllerForPropertyId = 30104,
  UIA_DescribedByPropertyId = 30105,
  UIA_FlowsToPropertyId = 30106,
  UIA_ProviderDescriptionPropertyId = 30107,
  UIA_IsItemContainerPatternAvailablePropertyId = 30108,
  UIA_IsVirtualizedItemPatternAvailablePropertyId = 30109,
  UIA_IsSynchronizedInputPatternAvailablePropertyId = 30110,
  UIA_OptimizeForVisualContentPropertyId = 30111,
  UIA_IsObjectModelPatternAvailablePropertyId = 30112,
  UIA_AnnotationAnnotationTypeIdPropertyId = 30113,
  UIA_AnnotationAnnotationTypeNamePropertyId = 30114,
  UIA_AnnotationAuthorPropertyId = 30115,
  UIA_AnnotationDateTimePropertyId = 30116,
  UIA_AnnotationTargetPropertyId = 30117,
  UIA_IsAnnotationPatternAvailablePropertyId = 30118,
  UIA_IsTextPattern2AvailablePropertyId = 30119,
  UIA_StylesStyleIdPropertyId = 30120,
  UIA_StylesStyleNamePropertyId = 30121,
  UIA_StylesFillColorPropertyId = 30122,
  UIA_StylesFillPatternStylePropertyId = 30123,
  UIA_StylesShapePropertyId = 30124,
  UIA_StylesFillPatternColorPropertyId = 30125,
  UIA_StylesExtendedPropertiesPropertyId = 30126,
  UIA_IsStylesPatternAvailablePropertyId = 30127,
  UIA_IsSpreadsheetPatternAvailablePropertyId = 30128,
  UIA_SpreadsheetItemFormulaPropertyId = 30129,
  UIA_SpreadsheetItemAnnotationObjectsPropertyId = 30130,
  UIA_SpreadsheetItemAnnotationTypesPropertyId = 30131,
  UIA_IsSpreadsheetItemPatternAvailablePropertyId = 30132,
  UIA_Transform2CanZoomPropertyId = 30133,
  UIA_IsTransformPattern2AvailablePropertyId = 30134,
  UIA_LiveSettingPropertyId = 30135,
  UIA_IsTextChildPatternAvailablePropertyId = 30136,
  UIA_IsDragPatternAvailablePropertyId = 30137,
  UIA_DragIsGrabbedPropertyId = 30138,
  UIA_DragDropEffectPropertyId = 30139,
  UIA_DragDropEffectsPropertyId = 30140,
  UIA_IsDropTargetPatternAvailablePropertyId = 30141,
  UIA_DropTargetDropTargetEffectPropertyId = 30142,
  UIA_DropTargetDropTargetEffectsPropertyId = 30143,
  UIA_DragGrabbedItemsPropertyId = 30144,
  UIA_Transform2ZoomLevelPropertyId = 30145,
  UIA_Transform2ZoomMinimumPropertyId = 30146,
  UIA_Transform2ZoomMaximumPropertyId = 30147,
  UIA_FlowsFromPropertyId = 30148,
  UIA_IsTextEditPatternAvailablePropertyId = 30149,
  UIA_IsPeripheralPropertyId = 30150,
  UIA_IsCustomNavigationPatternAvailablePropertyId = 30151,
  UIA_PositionInSetPropertyId = 30152,
  UIA_SizeOfSetPropertyId = 30153,
  UIA_LevelPropertyId = 30154,
  UIA_AnnotationTypesPropertyId = 30155,
  UIA_AnnotationObjectsPropertyId = 30156,
  UIA_LandmarkTypePropertyId = 30157,
  UIA_LocalizedLandmarkTypePropertyId = 30158,
  UIA_FullDescriptionPropertyId = 30159,
  UIA_FillColorPropertyId = 30160,
  UIA_OutlineColorPropertyId = 30161,
  UIA_FillTypePropertyId = 30162,
  UIA_VisualEffectsPropertyId = 30163,
  UIA_OutlineThicknessPropertyId = 30164,
  UIA_CenterPointPropertyId = 30165,
  UIA_RotationPropertyId = 30166,
  UIA_SizePropertyId = 30167,
  UIA_IsSelectionPattern2AvailablePropertyId = 30168,
  UIA_Selection2FirstSelectedItemPropertyId = 30169,
  UIA_Selection2LastSelectedItemPropertyId = 30170,
  UIA_Selection2CurrentSelectedItemPropertyId = 30171,
  UIA_Selection2ItemCountPropertyId = 30172,
  UIA_HeadingLevelPropertyId = 30173,
  UIA_IsDialogPropertyId = 30174,
}