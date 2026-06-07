/** Office phone line — digits are US E.164 without the leading + (for tel: links). */
export type OfficePhone = {
  label: string;
  region: string;
  display: string;
  displayDotted: string;
  digits: string;
};

export function telHref(phone: Pick<OfficePhone, "digits">): string {
  return `tel:+${phone.digits}`;
}
