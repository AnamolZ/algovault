
def timeConversion(time_split: str) -> str:
    """
    Converts a time from 12-hour AM/PM format to 24-hour military format.

    The function handles the conversion logic based on the 'AM' or 'PM' suffix:
    - If PM: Adds 12 to the hour, unless the hour is 12.
    - If AM: Changes '12' to '00', otherwise keeps the hour as is.

    Args:
        time_split (list[str]): A list of strings representing [hh, mm, ssAM/PM] 
            resulting from splitting the input string by ':'.

    Returns:
        str: The formatted time string in 24-hour format (HH:MM:SS).
    """
    if time_split[-1].endswith("PM"):
        if time_split[0] == "12": pass
        else: time_split[0] = str(int(time_split[0]) + 12)
    else:
        if time_split[0] == "12": time_split[0] = "00"
    return (":".join(time_split))[:-2]

def main():
    """
    Handles the input/output for the time conversion process.

    It reads a 12-hour format time string from standard input, splits it into 
    components, and prints the 24-hour converted result.
    """
    try:
        time = str(input().strip())
        time_split = time.split(":")
        print(timeConversion(time_split))
    except Exception as e:
        print("Exception: ", e)
        
if __name__ == "__main__":
    main()