using System.Text.Json;
using System.Text.Json.Serialization;

namespace LittleQflow.Models
{
    public class Client
    {
        public int? ID { get; set; }
        [JsonPropertyName("numberInLine")]
        public int NumberInLine { get; set; }
        [JsonPropertyName("fullName")]
        public string FullName { get; set; }
        [JsonPropertyName("checkinTime")]
        public DateTime CheckinTime { get; set; }
        [JsonPropertyName("status")]
        public StatusEnum Status { get; set; }
    }
}
