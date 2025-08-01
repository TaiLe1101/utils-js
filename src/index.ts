import dayjs from "dayjs";

/**
 * Formats a number as a string using the user's locale.
 * @param value The number to format.
 * @returns The formatted number string.
 */
export function formatNumber(value: number, format: string): string {
  return new Intl.NumberFormat(format).format(value);
}

/**
 * Formats a date as a string using dayjs with comprehensive format options.
 * @param date The date to format.
 * @param format The format string with all common date/time patterns.
 * @returns The formatted date string.
 */
export function formatDate(
  date: Date,
  format:
    // Basic date formats
    | "YYYY-MM-DD"              // 2025-08-01
    | "DD/MM/YYYY"              // 01/08/2025
    | "MM/DD/YYYY"              // 08/01/2025
    | "DD-MM-YYYY"              // 01-08-2025
    | "MM-DD-YYYY"              // 08-01-2025
    | "YYYY/MM/DD"              // 2025/08/01
    | "YY-MM-DD"                // 25-08-01
    | "DD.MM.YYYY"              // 01.08.2025
    
    // Date with time formats
    | "YYYY-MM-DD HH:mm:ss"     // 2025-08-01 14:30:00
    | "DD/MM/YYYY HH:mm:ss"     // 01/08/2025 14:30:00
    | "MM/DD/YYYY HH:mm:ss"     // 08/01/2025 14:30:00
    | "YYYY-MM-DD HH:mm"        // 2025-08-01 14:30
    | "DD/MM/YYYY HH:mm"        // 01/08/2025 14:30
    
    // 12-hour format with AM/PM
    | "YYYY-MM-DD h:mm A"       // 2025-08-01 2:30 PM
    | "DD/MM/YYYY h:mm A"       // 01/08/2025 2:30 PM
    | "MM/DD/YYYY h:mm A"       // 08/01/2025 2:30 PM
    | "YYYY-MM-DD h:mm:ss A"    // 2025-08-01 2:30:00 PM
    | "DD/MM/YYYY h:mm:ss A"    // 01/08/2025 2:30:00 PM
    
    // Long format with month names
    | "MMMM D, YYYY"            // August 1, 2025
    | "MMM D, YYYY"             // Aug 1, 2025
    | "D MMMM YYYY"             // 1 August 2025
    | "D MMM YYYY"              // 1 Aug 2025
    | "MMMM D, YYYY h:mm A"     // August 1, 2025 2:30 PM
    | "MMM D, YYYY h:mm A"      // Aug 1, 2025 2:30 PM
    | "D MMMM YYYY HH:mm"       // 1 August 2025 14:30
    
    // With day of week
    | "dddd, MMMM D, YYYY"      // Friday, August 1, 2025
    | "ddd, MMM D, YYYY"        // Fri, Aug 1, 2025
    | "dddd, D MMMM YYYY"       // Friday, 1 August 2025
    | "dddd, MMMM D, YYYY h:mm A" // Friday, August 1, 2025 2:30 PM
    | "ddd, MMM D, YYYY h:mm A" // Fri, Aug 1, 2025 2:30 PM
    
    // ISO formats
    | "YYYY-MM-DDTHH:mm:ss"     // 2025-08-01T14:30:00
    | "YYYY-MM-DDTHH:mm:ssZ"    // 2025-08-01T14:30:00Z
    | "YYYY-MM-DDTHH:mm:ss.SSS" // 2025-08-01T14:30:00.123
    
    // Time only formats
    | "HH:mm:ss"                // 14:30:00
    | "HH:mm"                   // 14:30
    | "h:mm A"                  // 2:30 PM
    | "h:mm:ss A"               // 2:30:00 PM
    
    // Special formats
    | "YYYY"                    // 2025
    | "MM"                      // 08
    | "DD"                      // 01
    | "MMMM"                    // August
    | "MMM"                     // Aug
    | "dddd"                    // Friday
    | "ddd"                     // Fri
    | "Q"                       // 3 (quarter)
    | "Qo"                      // 3rd (quarter with ordinal)
    | "w"                       // 31 (week of year)
    | "wo"                      // 31st (week with ordinal)
    | "DDD"                     // 213 (day of year)
    | "DDDo"                    // 213th (day of year with ordinal)
    
    // Relative time (requires dayjs relativeTime plugin)
    | "X"                       // Unix timestamp
    | "x"                       // Unix timestamp in milliseconds
    
    // Custom format string (for any dayjs format not listed above)
    | string
): string {
  return dayjs(date).format(format);
}

