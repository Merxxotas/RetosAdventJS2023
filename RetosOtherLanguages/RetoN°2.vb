Imports System.Collections.Generic
Module Module1
    Sub Main()
        Dim gifts As String() = {"tren", "oso", "pelota"}
        Dim materials As String = "tronesa"
        Dim result As List(Of String) = Manufacture(gifts, materials)
        Console.WriteLine(String.Join(", ", result))

        gifts = New String() {"juego", "puzzle"}
        materials = "jlepuz"
        result = Manufacture(gifts, materials)
        Console.WriteLine(String.Join(", ", result))

        gifts = New String() {"libro", "ps5"}
        materials = "psli"
        result = Manufacture(gifts, materials)
        Console.WriteLine(String.Join(", ", result))
    End Sub

    Function Manufacture(ByVal gifts As String(), ByVal materials As String) As List(Of String)
        Dim result As New List(Of String)()
        For Each gift As String In gifts
            Dim canMake As Boolean = True
            For Each letter As Char In gift
                If Not materials.Contains(letter) Then
                    canMake = False
                    Exit For
                End If
            Next
            If canMake Then
                result.Add(gift)
            End If
        Next
        Return result
    End Function
End Module
:
