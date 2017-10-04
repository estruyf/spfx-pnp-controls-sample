import { ICheckedTerms } from "@pnp/spfx-property-controls/lib/PropertyFieldTermPicker";
import { IDateTimeFieldValue } from "@pnp/spfx-property-controls/lib/PropertyFieldDateTimePicker";

export interface IPnPControlsWebPartProps {
  lists: string | string[]; // Stores the list ID(s)
  terms: ICheckedTerms; // Keeps hold of the selected terms
  description: string;
  datetime: IDateTimeFieldValue;
}
