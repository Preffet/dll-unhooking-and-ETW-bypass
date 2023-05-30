--------------------------------------------------------
## Description

C++ blueprint script for executing DLL Unhooking and modifying ETW.

The script is aimed at detecting and unhooking potential function hooks within ntdll.dll
system library and also attempts to disable Windows event tracing (ETW) to avoid detection.

It works as follows:

1. Detect function hooking in the ntdll.dll library: the functions that are checked for hooking here are NtAllocateVirtualMemory, NtProtectVirtualMemory, NtCreateThreadEx, and NtQueryInformationThread.

2. If any hooks are found, it un-hooks the ntdll.dll library: This involves creating a clean copy of the ntdll.dll file and then overwriting the hooked library with the clean one. This can be useful for evading detection by security software.

3. Patch the Event Tracing for Windows (ETW) writer: patching the ETW writer can be useful for evading detection, as it might prevent certain types of monitoring.

4. Encrypt/Decrypt(xor) a payload: in this code, the actual payload decryption process is commented out, but you can un-comment it.

5. Inject code into a process: the code creates a new suspended process of notepad.exe, injects a shellcode into the notepad process and resumes the notepad process. The shellcode pops up a simple message box, you can replace the process and the injected shellcode, the provided script is just a template.

To insert your own shellcode, you need to update the NqQlPkEKGs variable. Note that the shellcode should be formatted properly for it to be correctly executed.

------------------------------------------------------------
## References

[Full DLL Unhooking with C++ by Red Team Notes](https://www.ired.team/offensive-security/defense-evasion/how-to-unhook-a-dll-using-c++)

