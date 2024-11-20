using System.Net.NetworkInformation;

namespace Quiz.Common;

public static class DeviceIdHelper
{
    private static readonly object _lock = new object();
    private static string? _deviceId = null;
    public static string DeviceUniqueId
    {
        get
        {
            if (_deviceId == null)
            {
                lock (_lock)
                {
                    if (_deviceId == null)
                        _deviceId = GetDeviceId();
                }
            }
            return _deviceId!;
        }
    }

    private static string? GetDeviceId()
    {
        return IdGenerator.New;
    }
}