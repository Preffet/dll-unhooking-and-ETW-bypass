![Badge tracking project size](https://img.shields.io/github/repo-size/Preffet/dll-unhooking-and-ETW-bypass?color=%23611487)![Badge tracking code size](https://img.shields.io/github/languages/code-size/Preffet/dll-unhooking-and-ETW-bypass?color=%23361487)![Badge tracking last commit](https://img.shields.io/github/last-commit/Preffet/dll-unhooking-and-ETW-bypass?color=%23142d87)

<img width="962" alt="Screen Shot 2023-05-30 at 22 01 53" src="https://github.com/Preffet/dll-unhooking-and-ETW-bypass/assets/84241003/5fa89a51-90b8-4d2f-8586-2bcf8c3ab113">

--------------------------------------------------------
## Description

This is a blueprint script for executing DLL Unhooking and modifying ETW, written in C++. It 
is aimed at detecting and unhooking potential function hooks within ntdll.dll
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

------------------------------------------------------------
## Disclaimer

This application was developed as part of my learning journey around DLL unhooking and is intended solely for educational purposes.
