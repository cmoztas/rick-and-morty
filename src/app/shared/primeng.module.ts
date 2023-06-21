import {NgModule} from "@angular/core";
import {AccordionModule} from "primeng/accordion";
import {AnimateModule} from "primeng/animate";
import {AutoCompleteModule} from "primeng/autocomplete";
import {AutoFocusModule} from "primeng/autofocus";
import {AvatarModule} from "primeng/avatar";
import {AvatarGroupModule} from "primeng/avatargroup";
import {BadgeModule} from "primeng/badge";
import {BlockUIModule} from "primeng/blockui";
import {BreadcrumbModule} from "primeng/breadcrumb";
import {ButtonModule} from "primeng/button";
import {CalendarModule} from "primeng/calendar";
import {CardModule} from "primeng/card";
import {CarouselModule} from "primeng/carousel";
import {CascadeSelectModule} from "primeng/cascadeselect";
import {ChartModule} from "primeng/chart";
import {CheckboxModule} from "primeng/checkbox";
import {ChipModule} from "primeng/chip";
import {ChipsModule} from "primeng/chips";
import {ColorPickerModule} from "primeng/colorpicker";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {ConfirmPopupModule} from "primeng/confirmpopup";
import {ContextMenuModule} from "primeng/contextmenu";
import {DataViewModule} from "primeng/dataview";
import {DeferModule} from "primeng/defer";
import {DialogModule} from "primeng/dialog";
import {DividerModule} from "primeng/divider";
import {DockModule} from "primeng/dock";
import {DragDropModule} from "primeng/dragdrop";
import {DialogService, DynamicDialogModule} from "primeng/dynamicdialog";
import {EditorModule} from "primeng/editor";
import {FieldsetModule} from "primeng/fieldset";
import {FileUploadModule} from "primeng/fileupload";
import {FocusTrapModule} from "primeng/focustrap";
import {GalleriaModule} from "primeng/galleria";
import {ImageModule} from "primeng/image";
import {InplaceModule} from "primeng/inplace";
import {InputMaskModule} from "primeng/inputmask";
import {InputNumberModule} from "primeng/inputnumber";
import {InputSwitchModule} from "primeng/inputswitch";
import {InputTextModule} from "primeng/inputtext";
import {InputTextareaModule} from "primeng/inputtextarea";
import {KeyFilterModule} from "primeng/keyfilter";
import {KnobModule} from "primeng/knob";
import {ListboxModule} from "primeng/listbox";
import {MegaMenuModule} from "primeng/megamenu";
import {MenuModule} from "primeng/menu";
import {MenubarModule, MenubarService} from "primeng/menubar";
import {MessageModule} from "primeng/message";
import {MessagesModule} from "primeng/messages";
import {MultiSelectModule} from "primeng/multiselect";
import {OrderListModule} from "primeng/orderlist";
import {OrganizationChartModule} from "primeng/organizationchart";
import {OverlayModule} from "primeng/overlay";
import {OverlayPanelModule} from "primeng/overlaypanel";
import {PaginatorModule} from "primeng/paginator";
import {PanelModule} from "primeng/panel";
import {PanelMenuModule} from "primeng/panelmenu";
import {PasswordModule} from "primeng/password";
import {PickListModule} from "primeng/picklist";
import {ProgressBarModule} from "primeng/progressbar";
import {ProgressSpinnerModule} from "primeng/progressspinner";
import {RadioButtonModule} from "primeng/radiobutton";
import {RatingModule} from "primeng/rating";
import {RippleModule} from "primeng/ripple";
import {ScrollerModule} from "primeng/scroller";
import {ScrollPanelModule} from "primeng/scrollpanel";
import {ScrollTopModule} from "primeng/scrolltop";
import {SelectButtonModule} from "primeng/selectbutton";
import {SidebarModule} from "primeng/sidebar";
import {SkeletonModule} from "primeng/skeleton";
import {SlideMenuModule} from "primeng/slidemenu";
import {SliderModule} from "primeng/slider";
import {SpeedDialModule} from "primeng/speeddial";
import {SpinnerModule} from "primeng/spinner";
import {SplitButtonModule} from "primeng/splitbutton";
import {SplitterModule} from "primeng/splitter";
import {StepsModule} from "primeng/steps";
import {StyleClassModule} from "primeng/styleclass";
import {TableModule, TableService} from "primeng/table";
import {TabMenuModule} from "primeng/tabmenu";
import {TabViewModule} from "primeng/tabview";
import {TagModule} from "primeng/tag";
import {TerminalModule, TerminalService} from "primeng/terminal";
import {TieredMenuModule} from "primeng/tieredmenu";
import {TimelineModule} from "primeng/timeline";
import {ToastModule} from "primeng/toast";
import {ToggleButtonModule} from "primeng/togglebutton";
import {ToolbarModule} from "primeng/toolbar";
import {TooltipModule} from "primeng/tooltip";
import {TreeModule} from "primeng/tree";
import {TreeSelectModule} from "primeng/treeselect";
import {TreeTableModule, TreeTableService} from "primeng/treetable";
import {TriStateCheckboxModule} from "primeng/tristatecheckbox";
import {
  ConfirmationService,
  ContextMenuService,
  FilterService,
  MessageService,
  OverlayService,
  TreeDragDropService
} from "primeng/api";

@NgModule({
  imports: [
  ],
  exports: [
    AccordionModule,
    AnimateModule,
    AutoCompleteModule,
    AutoFocusModule,
    AvatarModule,
    AvatarGroupModule,
    BadgeModule,
    BlockUIModule,
    BreadcrumbModule,
    ButtonModule,
    CalendarModule,
    CardModule,
    CarouselModule,
    CascadeSelectModule,
    ChartModule,
    CheckboxModule,
    ChipModule,
    ChipsModule,
    ColorPickerModule,
    ConfirmDialogModule,
    ConfirmPopupModule,
    ContextMenuModule,
    DataViewModule,
    DeferModule,
    DialogModule,
    DividerModule,
    DockModule,
    DragDropModule,
    DynamicDialogModule,
    EditorModule,
    FieldsetModule,
    FileUploadModule,
    FocusTrapModule,
    GalleriaModule,
    ImageModule,
    InplaceModule,
    InputMaskModule,
    InputNumberModule,
    InputSwitchModule,
    InputTextModule,
    InputTextareaModule,
    KeyFilterModule,
    KnobModule,
    ListboxModule,
    MegaMenuModule,
    MenuModule,
    MenubarModule,
    MessageModule,
    MessagesModule,
    MultiSelectModule,
    OrderListModule,
    OrganizationChartModule,
    OverlayModule,
    OverlayPanelModule,
    PaginatorModule,
    PanelModule,
    PanelMenuModule,
    PasswordModule,
    PickListModule,
    ProgressBarModule,
    ProgressSpinnerModule,
    RadioButtonModule,
    RatingModule,
    RippleModule,
    ScrollerModule,
    ScrollPanelModule,
    ScrollTopModule,
    SelectButtonModule,
    SidebarModule,
    SkeletonModule,
    SlideMenuModule,
    SliderModule,
    SpeedDialModule,
    SpinnerModule,
    SplitButtonModule,
    SplitterModule,
    StepsModule,
    StyleClassModule,
    TableModule,
    TabMenuModule,
    TabViewModule,
    TagModule,
    TerminalModule,
    TieredMenuModule,
    TimelineModule,
    ToastModule,
    ToggleButtonModule,
    ToolbarModule,
    TooltipModule,
    TreeModule,
    TreeSelectModule,
    TreeTableModule,
    TriStateCheckboxModule
  ],
  providers: [
    DialogService,
    ConfirmationService,
    MessageService,
    TreeDragDropService,
    ContextMenuService,
    FilterService,
    MenubarService,
    TreeTableService,
    TerminalService,
    TableService,
    OverlayService
  ]
})
export class PrimengModule {
}
