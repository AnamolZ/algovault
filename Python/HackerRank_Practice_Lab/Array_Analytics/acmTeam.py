
def acmTeam(topic_strings, number_of_topics):
    topic_bitmasks = []
    for i, topic in enumerate(topic_strings):
        if len(topic) != number_of_topics:
            raise ValueError(f"Attendee {i+1}'s topic string length ({len(topic)}) does not match expected length {number_of_topics}.")
        try:
            topic_bitmasks.append(int(topic, 2))
        except ValueError:
            raise ValueError(f"Attendee {i+1}'s topic string contains invalid characters. Only '0' and '1' are allowed.")

    max_topics_known = 0
    max_teams_count = 0
    n = len(topic_bitmasks)

    for i in range(n):
        mask_a = topic_bitmasks[i]
        for j in range(i + 1, n):
            combined_topics = mask_a | topic_bitmasks[j]
            topics_known_count = combined_topics.bit_count()
            
            if topics_known_count > max_topics_known:
                max_topics_known = topics_known_count
                max_teams_count = 1
            elif topics_known_count == max_topics_known:
                max_teams_count += 1

    return max_topics_known, max_teams_count

def main():
    try:
        first_multiple_input = input().rstrip().split()
        if len(first_multiple_input) < 2:
            print("Invalid input. Please provide number of attendees and topics.")
            return

        number_of_attendees = int(first_multiple_input[0])
        number_of_topics = int(first_multiple_input[1])

        topic_strings = []
        for _ in range(number_of_attendees):
            topic_strings.append(input().rstrip())

        if len(topic_strings) != number_of_attendees:
             print(f"Error: Expected {number_of_attendees} attendees, but got {len(topic_strings)}.")
             return

        result = acmTeam(topic_strings, number_of_topics)
        print(result[0])
        print(result[1])
    except EOFError:
        pass
    except ValueError as e:
        print(f"Input Error: {e}")
    except Exception as e:
        print(f"An unexpected error occurred: {e}")


if __name__ == '__main__':
    main()